export type DeletePrescriptionsIdPathParams = {
  /**
   * @type string, uuid
   */
  id: string
}

export const deletePrescriptionsId204SuccessEnum = {
  true: true,
} as const

export type DeletePrescriptionsId204SuccessEnum = (typeof deletePrescriptionsId204SuccessEnum)[keyof typeof deletePrescriptionsId204SuccessEnum]

export const deletePrescriptionsId204ErrorEnum = {
  null: 'null',
} as const

export type DeletePrescriptionsId204ErrorEnum = (typeof deletePrescriptionsId204ErrorEnum)[keyof typeof deletePrescriptionsId204ErrorEnum]

export const deletePrescriptionsId204DataEnum = {
  null: 'null',
} as const

export type DeletePrescriptionsId204DataEnum = (typeof deletePrescriptionsId204DataEnum)[keyof typeof deletePrescriptionsId204DataEnum]

/**
 * @description No Content
 */
export type DeletePrescriptionsId204 = {
  /**
   * @type boolean
   */
  success: DeletePrescriptionsId204SuccessEnum
  error: DeletePrescriptionsId204ErrorEnum | null
  data: DeletePrescriptionsId204DataEnum | null
}

export const deletePrescriptionsId401SuccessEnum = {
  false: false,
} as const

export type DeletePrescriptionsId401SuccessEnum = (typeof deletePrescriptionsId401SuccessEnum)[keyof typeof deletePrescriptionsId401SuccessEnum]

export const deletePrescriptionsId401DataEnum = {
  null: 'null',
} as const

export type DeletePrescriptionsId401DataEnum = (typeof deletePrescriptionsId401DataEnum)[keyof typeof deletePrescriptionsId401DataEnum]

/**
 * @description Unauthorized
 */
export type DeletePrescriptionsId401 = {
  /**
   * @type boolean
   */
  success: DeletePrescriptionsId401SuccessEnum
  /**
   * @type string
   */
  error: string
  data: DeletePrescriptionsId401DataEnum | null
}

export const deletePrescriptionsId404SuccessEnum = {
  false: false,
} as const

export type DeletePrescriptionsId404SuccessEnum = (typeof deletePrescriptionsId404SuccessEnum)[keyof typeof deletePrescriptionsId404SuccessEnum]

export const deletePrescriptionsId404DataEnum = {
  null: 'null',
} as const

export type DeletePrescriptionsId404DataEnum = (typeof deletePrescriptionsId404DataEnum)[keyof typeof deletePrescriptionsId404DataEnum]

/**
 * @description Prescription not found
 */
export type DeletePrescriptionsId404 = {
  /**
   * @type boolean
   */
  success: DeletePrescriptionsId404SuccessEnum
  /**
   * @type string
   */
  error: string
  data: DeletePrescriptionsId404DataEnum | null
}

export type DeletePrescriptionsIdMutationResponse = DeletePrescriptionsId204

export type DeletePrescriptionsIdMutation = {
  Response: DeletePrescriptionsId204
  PathParams: DeletePrescriptionsIdPathParams
  Errors: DeletePrescriptionsId401 | DeletePrescriptionsId404
}