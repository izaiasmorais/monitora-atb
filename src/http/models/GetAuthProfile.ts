export const getAuthProfile200SuccessEnum = {
  true: true,
} as const

export type GetAuthProfile200SuccessEnum = (typeof getAuthProfile200SuccessEnum)[keyof typeof getAuthProfile200SuccessEnum]

export const getAuthProfile200ErrorEnum = {
  null: 'null',
} as const

export type GetAuthProfile200ErrorEnum = (typeof getAuthProfile200ErrorEnum)[keyof typeof getAuthProfile200ErrorEnum]

/**
 * @description Success
 */
export type GetAuthProfile200 = {
  /**
   * @type boolean
   */
  success: GetAuthProfile200SuccessEnum
  error: GetAuthProfile200ErrorEnum | null
  /**
   * @type object
   */
  data: {
    /**
     * @type string
     */
    id: string
    /**
     * @type string
     */
    name: string
    /**
     * @type string, email
     */
    email: string
  }
}

export const getAuthProfile401SuccessEnum = {
  false: false,
} as const

export type GetAuthProfile401SuccessEnum = (typeof getAuthProfile401SuccessEnum)[keyof typeof getAuthProfile401SuccessEnum]

export const getAuthProfile401DataEnum = {
  null: 'null',
} as const

export type GetAuthProfile401DataEnum = (typeof getAuthProfile401DataEnum)[keyof typeof getAuthProfile401DataEnum]

/**
 * @description Unauthorized
 */
export type GetAuthProfile401 = {
  /**
   * @type boolean
   */
  success: GetAuthProfile401SuccessEnum
  /**
   * @type string
   */
  error: string
  data: GetAuthProfile401DataEnum | null
}

export const getAuthProfile404SuccessEnum = {
  false: false,
} as const

export type GetAuthProfile404SuccessEnum = (typeof getAuthProfile404SuccessEnum)[keyof typeof getAuthProfile404SuccessEnum]

export const getAuthProfile404DataEnum = {
  null: 'null',
} as const

export type GetAuthProfile404DataEnum = (typeof getAuthProfile404DataEnum)[keyof typeof getAuthProfile404DataEnum]

/**
 * @description Not Found
 */
export type GetAuthProfile404 = {
  /**
   * @type boolean
   */
  success: GetAuthProfile404SuccessEnum
  /**
   * @type string
   */
  error: string
  data: GetAuthProfile404DataEnum | null
}

export type GetAuthProfileQueryResponse = GetAuthProfile200

export type GetAuthProfileQuery = {
  Response: GetAuthProfile200
  Errors: GetAuthProfile401 | GetAuthProfile404
}