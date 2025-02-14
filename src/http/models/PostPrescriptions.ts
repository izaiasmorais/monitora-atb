export const postPrescriptions204SuccessEnum = {
  true: true,
} as const

export type PostPrescriptions204SuccessEnum = (typeof postPrescriptions204SuccessEnum)[keyof typeof postPrescriptions204SuccessEnum]

export const postPrescriptions204ErrorEnum = {
  null: 'null',
} as const

export type PostPrescriptions204ErrorEnum = (typeof postPrescriptions204ErrorEnum)[keyof typeof postPrescriptions204ErrorEnum]

export const postPrescriptions204DataEnum = {
  null: 'null',
} as const

export type PostPrescriptions204DataEnum = (typeof postPrescriptions204DataEnum)[keyof typeof postPrescriptions204DataEnum]

/**
 * @description No Content
 */
export type PostPrescriptions204 = {
  /**
   * @type boolean
   */
  success: PostPrescriptions204SuccessEnum
  error: PostPrescriptions204ErrorEnum | null
  data: PostPrescriptions204DataEnum | null
}

export const postPrescriptions400SuccessEnum = {
  false: false,
} as const

export type PostPrescriptions400SuccessEnum = (typeof postPrescriptions400SuccessEnum)[keyof typeof postPrescriptions400SuccessEnum]

export const postPrescriptions400DataEnum = {
  null: 'null',
} as const

export type PostPrescriptions400DataEnum = (typeof postPrescriptions400DataEnum)[keyof typeof postPrescriptions400DataEnum]

/**
 * @description Bad Request
 */
export type PostPrescriptions400 = {
  /**
   * @type boolean
   */
  success: PostPrescriptions400SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PostPrescriptions400DataEnum | null
}

export const postPrescriptions401SuccessEnum = {
  false: false,
} as const

export type PostPrescriptions401SuccessEnum = (typeof postPrescriptions401SuccessEnum)[keyof typeof postPrescriptions401SuccessEnum]

export const postPrescriptions401DataEnum = {
  null: 'null',
} as const

export type PostPrescriptions401DataEnum = (typeof postPrescriptions401DataEnum)[keyof typeof postPrescriptions401DataEnum]

/**
 * @description Unauthorized
 */
export type PostPrescriptions401 = {
  /**
   * @type boolean
   */
  success: PostPrescriptions401SuccessEnum
  /**
   * @type string
   */
  error: string
  data: PostPrescriptions401DataEnum | null
}

export type PostPrescriptionsMutationRequest = {
  /**
   * @type string
   */
  id: string
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

export type PostPrescriptionsMutationResponse = PostPrescriptions204

export type PostPrescriptionsMutation = {
  Response: PostPrescriptions204
  Request: PostPrescriptionsMutationRequest
  Errors: PostPrescriptions400 | PostPrescriptions401
}