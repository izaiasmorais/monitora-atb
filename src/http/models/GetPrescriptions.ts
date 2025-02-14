export type GetPrescriptionsQueryParams = {
  /**
   * @minLength 0
   * @type integer | undefined
   */
  pageIndex?: number
  /**
   * @minLength 0
   * @type integer | undefined
   */
  perPage?: number
  /**
   * @type string
   */
  id?: string | null
  /**
   * @type string
   */
  medicalRecord?: string | null
  /**
   * @type string
   */
  name?: string | null
  /**
   * @type string
   */
  medicine?: string | null
  /**
   * @type string
   */
  unit?: string | null
  /**
   * @type number
   */
  dose?: number | null
  /**
   * @type string
   */
  posology?: string | null
}

export const getPrescriptions200SuccessEnum = {
  true: true,
} as const

export type GetPrescriptions200SuccessEnum = (typeof getPrescriptions200SuccessEnum)[keyof typeof getPrescriptions200SuccessEnum]

export const getPrescriptions200ErrorEnum = {
  null: 'null',
} as const

export type GetPrescriptions200ErrorEnum = (typeof getPrescriptions200ErrorEnum)[keyof typeof getPrescriptions200ErrorEnum]

/**
 * @description OK
 */
export type GetPrescriptions200 = {
  /**
   * @type boolean
   */
  success: GetPrescriptions200SuccessEnum
  error: GetPrescriptions200ErrorEnum | null
  /**
   * @type object
   */
  data: {
    /**
     * @type array
     */
    prescriptions: {
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
    }[]
    /**
     * @type object
     */
    meta: {
      /**
       * @type number
       */
      pageIndex: number
      /**
       * @type number
       */
      perPage: number
      /**
       * @type number
       */
      totalCount: number
    }
  }
}

export const getPrescriptions401SuccessEnum = {
  false: false,
} as const

export type GetPrescriptions401SuccessEnum = (typeof getPrescriptions401SuccessEnum)[keyof typeof getPrescriptions401SuccessEnum]

export const getPrescriptions401DataEnum = {
  null: 'null',
} as const

export type GetPrescriptions401DataEnum = (typeof getPrescriptions401DataEnum)[keyof typeof getPrescriptions401DataEnum]

/**
 * @description Unauthorized
 */
export type GetPrescriptions401 = {
  /**
   * @type boolean
   */
  success: GetPrescriptions401SuccessEnum
  /**
   * @type string
   */
  error: string
  data: GetPrescriptions401DataEnum | null
}

export type GetPrescriptionsQueryResponse = GetPrescriptions200

export type GetPrescriptionsQuery = {
  Response: GetPrescriptions200
  QueryParams: GetPrescriptionsQueryParams
  Errors: GetPrescriptions401
}