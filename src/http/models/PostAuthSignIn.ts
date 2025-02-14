export const postAuthSignIn201SuccessEnum = {
  true: true,
} as const

export type PostAuthSignIn201SuccessEnum = (typeof postAuthSignIn201SuccessEnum)[keyof typeof postAuthSignIn201SuccessEnum]

export const postAuthSignIn201ErrorEnum = {
  null: 'null',
} as const

export type PostAuthSignIn201ErrorEnum = (typeof postAuthSignIn201ErrorEnum)[keyof typeof postAuthSignIn201ErrorEnum]

/**
 * @description Created
 */
export type PostAuthSignIn201 = {
  /**
   * @type boolean
   */
  success: PostAuthSignIn201SuccessEnum
  error: PostAuthSignIn201ErrorEnum | null
  /**
   * @type object
   */
  data: {
    /**
     * @type string
     */
    token: string
  }
}

export const postAuthSignIn400SuccessEnum = {
  false: false,
} as const

export type PostAuthSignIn400SuccessEnum = (typeof postAuthSignIn400SuccessEnum)[keyof typeof postAuthSignIn400SuccessEnum]

export const postAuthSignIn400DataEnum = {
  null: 'null',
} as const

export type PostAuthSignIn400DataEnum = (typeof postAuthSignIn400DataEnum)[keyof typeof postAuthSignIn400DataEnum]

/**
 * @description Bad Request
 */
export type PostAuthSignIn400 = {
  /**
   * @type boolean
   */
  success: PostAuthSignIn400SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PostAuthSignIn400DataEnum | null
}

export type PostAuthSignInMutationRequest = {
  /**
   * @type string, email
   */
  email: string
  /**
   * @minLength 6
   * @type string
   */
  password: string
}

export type PostAuthSignInMutationResponse = PostAuthSignIn201

export type PostAuthSignInMutation = {
  Response: PostAuthSignIn201
  Request: PostAuthSignInMutationRequest
  Errors: PostAuthSignIn400
}