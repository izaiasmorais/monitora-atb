export const postAuthSignUp204SuccessEnum = {
  true: true,
} as const

export type PostAuthSignUp204SuccessEnum = (typeof postAuthSignUp204SuccessEnum)[keyof typeof postAuthSignUp204SuccessEnum]

export const postAuthSignUp204ErrorEnum = {
  null: 'null',
} as const

export type PostAuthSignUp204ErrorEnum = (typeof postAuthSignUp204ErrorEnum)[keyof typeof postAuthSignUp204ErrorEnum]

export const postAuthSignUp204DataEnum = {
  null: 'null',
} as const

export type PostAuthSignUp204DataEnum = (typeof postAuthSignUp204DataEnum)[keyof typeof postAuthSignUp204DataEnum]

/**
 * @description No Content
 */
export type PostAuthSignUp204 = {
  /**
   * @type boolean
   */
  success: PostAuthSignUp204SuccessEnum
  error: PostAuthSignUp204ErrorEnum | null
  data: PostAuthSignUp204DataEnum | null
}

export const postAuthSignUp400SuccessEnum = {
  false: false,
} as const

export type PostAuthSignUp400SuccessEnum = (typeof postAuthSignUp400SuccessEnum)[keyof typeof postAuthSignUp400SuccessEnum]

export const postAuthSignUp400DataEnum = {
  null: 'null',
} as const

export type PostAuthSignUp400DataEnum = (typeof postAuthSignUp400DataEnum)[keyof typeof postAuthSignUp400DataEnum]

/**
 * @description Bad Request
 */
export type PostAuthSignUp400 = {
  /**
   * @type boolean
   */
  success: PostAuthSignUp400SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PostAuthSignUp400DataEnum | null
}

export const postAuthSignUp409SuccessEnum = {
  false: false,
} as const

export type PostAuthSignUp409SuccessEnum = (typeof postAuthSignUp409SuccessEnum)[keyof typeof postAuthSignUp409SuccessEnum]

export const postAuthSignUp409DataEnum = {
  null: 'null',
} as const

export type PostAuthSignUp409DataEnum = (typeof postAuthSignUp409DataEnum)[keyof typeof postAuthSignUp409DataEnum]

/**
 * @description Conflict
 */
export type PostAuthSignUp409 = {
  /**
   * @type boolean
   */
  success: PostAuthSignUp409SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PostAuthSignUp409DataEnum | null
}

export type PostAuthSignUpMutationRequest = {
  /**
   * @minLength 1
   * @type string
   */
  name: string
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

export type PostAuthSignUpMutationResponse = PostAuthSignUp204

export type PostAuthSignUpMutation = {
  Response: PostAuthSignUp204
  Request: PostAuthSignUpMutationRequest
  Errors: PostAuthSignUp400 | PostAuthSignUp409
}