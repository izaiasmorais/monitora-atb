export const deleteAuthDeleteAccount204SuccessEnum = {
  true: true,
} as const

export type DeleteAuthDeleteAccount204SuccessEnum = (typeof deleteAuthDeleteAccount204SuccessEnum)[keyof typeof deleteAuthDeleteAccount204SuccessEnum]

export const deleteAuthDeleteAccount204ErrorEnum = {
  null: 'null',
} as const

export type DeleteAuthDeleteAccount204ErrorEnum = (typeof deleteAuthDeleteAccount204ErrorEnum)[keyof typeof deleteAuthDeleteAccount204ErrorEnum]

export const deleteAuthDeleteAccount204DataEnum = {
  null: 'null',
} as const

export type DeleteAuthDeleteAccount204DataEnum = (typeof deleteAuthDeleteAccount204DataEnum)[keyof typeof deleteAuthDeleteAccount204DataEnum]

/**
 * @description No Content
 */
export type DeleteAuthDeleteAccount204 = {
  /**
   * @type boolean
   */
  success: DeleteAuthDeleteAccount204SuccessEnum
  error: DeleteAuthDeleteAccount204ErrorEnum | null
  data: DeleteAuthDeleteAccount204DataEnum | null
}

export const deleteAuthDeleteAccount401SuccessEnum = {
  false: false,
} as const

export type DeleteAuthDeleteAccount401SuccessEnum = (typeof deleteAuthDeleteAccount401SuccessEnum)[keyof typeof deleteAuthDeleteAccount401SuccessEnum]

export const deleteAuthDeleteAccount401DataEnum = {
  null: 'null',
} as const

export type DeleteAuthDeleteAccount401DataEnum = (typeof deleteAuthDeleteAccount401DataEnum)[keyof typeof deleteAuthDeleteAccount401DataEnum]

/**
 * @description Unauthorized
 */
export type DeleteAuthDeleteAccount401 = {
  /**
   * @type boolean
   */
  success: DeleteAuthDeleteAccount401SuccessEnum
  /**
   * @type string
   */
  error: string
  data: DeleteAuthDeleteAccount401DataEnum | null
}

export const deleteAuthDeleteAccount404SuccessEnum = {
  false: false,
} as const

export type DeleteAuthDeleteAccount404SuccessEnum = (typeof deleteAuthDeleteAccount404SuccessEnum)[keyof typeof deleteAuthDeleteAccount404SuccessEnum]

export const deleteAuthDeleteAccount404DataEnum = {
  null: 'null',
} as const

export type DeleteAuthDeleteAccount404DataEnum = (typeof deleteAuthDeleteAccount404DataEnum)[keyof typeof deleteAuthDeleteAccount404DataEnum]

/**
 * @description Not Found
 */
export type DeleteAuthDeleteAccount404 = {
  /**
   * @type boolean
   */
  success: DeleteAuthDeleteAccount404SuccessEnum
  /**
   * @type string
   */
  error: string
  data: DeleteAuthDeleteAccount404DataEnum | null
}

export type DeleteAuthDeleteAccountMutationResponse = DeleteAuthDeleteAccount204

export type DeleteAuthDeleteAccountMutation = {
  Response: DeleteAuthDeleteAccount204
  Errors: DeleteAuthDeleteAccount401 | DeleteAuthDeleteAccount404
}