import { GraphQLClient } from 'graphql-request'

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'your-store.myshopify.com'
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || ''

const shopifyClient = new GraphQLClient(
  `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json`,
  {
    headers: {
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  }
)

// GraphQL Queries
export const GET_PRODUCTS = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`

export const GET_PRODUCT_BY_HANDLE = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }
`

export const CREATE_CART = `
  mutation CreateCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`

export const ADD_TO_CART = `
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`

// API Functions
export async function getProducts(first: number = 10) {
  try {
    const variables = { first }
    const data = await shopifyClient.request(GET_PRODUCTS, variables)
    return data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    return null
  }
}

export async function getProductByHandle(handle: string) {
  try {
    const variables = { handle }
    const data = await shopifyClient.request(GET_PRODUCT_BY_HANDLE, variables)
    return data.product
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export async function createCart(variantId: string, quantity: number = 1) {
  try {
    const variables = {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
    }
    const data = await shopifyClient.request(CREATE_CART, variables)
    return data.cartCreate
  } catch (error) {
    console.error('Error creating cart:', error)
    return null
  }
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1) {
  try {
    const variables = {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    }
    const data = await shopifyClient.request(ADD_TO_CART, variables)
    return data.cartLinesAdd
  } catch (error) {
    console.error('Error adding to cart:', error)
    return null
  }
}

// Cart Management (Client-side)
export class CartManager {
  private static instance: CartManager
  private cartId: string | null = null

  static getInstance(): CartManager {
    if (!CartManager.instance) {
      CartManager.instance = new CartManager()
    }
    return CartManager.instance
  }

  setCartId(cartId: string) {
    this.cartId = cartId
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopify_cart_id', cartId)
    }
  }

  getCartId(): string | null {
    if (this.cartId) return this.cartId
    if (typeof window !== 'undefined') {
      return localStorage.getItem('shopify_cart_id')
    }
    return null
  }

  clearCart() {
    this.cartId = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('shopify_cart_id')
    }
  }
}
