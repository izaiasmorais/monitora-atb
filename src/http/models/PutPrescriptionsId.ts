export type PutPrescriptionsIdPathParams = {
  /**
   * @type string
   */
  id: string
}

export const putPrescriptionsId204SuccessEnum = {
  true: true,
} as const

export type PutPrescriptionsId204SuccessEnum = (typeof putPrescriptionsId204SuccessEnum)[keyof typeof putPrescriptionsId204SuccessEnum]

export const putPrescriptionsId204ErrorEnum = {
  null: 'null',
} as const

export type PutPrescriptionsId204ErrorEnum = (typeof putPrescriptionsId204ErrorEnum)[keyof typeof putPrescriptionsId204ErrorEnum]

export const putPrescriptionsId204DataEnum = {
  null: 'null',
} as const

export type PutPrescriptionsId204DataEnum = (typeof putPrescriptionsId204DataEnum)[keyof typeof putPrescriptionsId204DataEnum]

/**
 * @description No Content
 */
export type PutPrescriptionsId204 = {
  /**
   * @type boolean
   */
  success: PutPrescriptionsId204SuccessEnum
  error: PutPrescriptionsId204ErrorEnum | null
  data: PutPrescriptionsId204DataEnum | null
}

export const putPrescriptionsId400SuccessEnum = {
  false: false,
} as const

export type PutPrescriptionsId400SuccessEnum = (typeof putPrescriptionsId400SuccessEnum)[keyof typeof putPrescriptionsId400SuccessEnum]

export const putPrescriptionsId400DataEnum = {
  null: 'null',
} as const

export type PutPrescriptionsId400DataEnum = (typeof putPrescriptionsId400DataEnum)[keyof typeof putPrescriptionsId400DataEnum]

/**
 * @description Bad Request
 */
export type PutPrescriptionsId400 = {
  /**
   * @type boolean
   */
  success: PutPrescriptionsId400SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PutPrescriptionsId400DataEnum | null
}

export const putPrescriptionsId401SuccessEnum = {
  false: false,
} as const

export type PutPrescriptionsId401SuccessEnum = (typeof putPrescriptionsId401SuccessEnum)[keyof typeof putPrescriptionsId401SuccessEnum]

export const putPrescriptionsId401DataEnum = {
  null: 'null',
} as const

export type PutPrescriptionsId401DataEnum = (typeof putPrescriptionsId401DataEnum)[keyof typeof putPrescriptionsId401DataEnum]

/**
 * @description Unauthorized
 */
export type PutPrescriptionsId401 = {
  /**
   * @type boolean
   */
  success: PutPrescriptionsId401SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PutPrescriptionsId401DataEnum | null
}

export const putPrescriptionsId404SuccessEnum = {
  false: false,
} as const

export type PutPrescriptionsId404SuccessEnum = (typeof putPrescriptionsId404SuccessEnum)[keyof typeof putPrescriptionsId404SuccessEnum]

export const putPrescriptionsId404DataEnum = {
  null: 'null',
} as const

export type PutPrescriptionsId404DataEnum = (typeof putPrescriptionsId404DataEnum)[keyof typeof putPrescriptionsId404DataEnum]

/**
 * @description Not Found
 */
export type PutPrescriptionsId404 = {
  /**
   * @type boolean
   */
  success: PutPrescriptionsId404SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PutPrescriptionsId404DataEnum | null
}

export type PutPrescriptionsIdMutationRequest = {
  /**
   * @type string
   */
  medicalRecord: string
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  medicine: string
  /**
   * @type string
   */
  unit: string
  /**
   * @type number
   */
  dose: number
  /**
   * @type string
   */
  via: string
  /**
   * @type string
   */
  posology: string
  /**
   * @type array
   */
  posologyDays: string[]
}

export type PutPrescriptionsIdMutationResponse = PutPrescriptionsId204

export type PutPrescriptionsIdMutation = {
  Response: PutPrescriptionsId204
  Request: PutPrescriptionsIdMutationRequest
  PathParams: PutPrescriptionsIdPathParams
  Errors: PutPrescriptionsId400 | PutPrescriptionsId401 | PutPrescriptionsId404
}