export class User {
  storeIdReqEquip: boolean = false;
  siteEnvironment: string = "";
  dateFormat: string = "";
  companyName: string = "";
  mktAgreement: string = "";
  viewCredits: boolean = false;
  inProxy: boolean = false;
  placeOrderEnterprise: boolean = false;
  clearSky: boolean = false;
  priceBook: string = "";
  userState: string = "";
  defaultCurrency: string = "";
  defaultFreight2: string = "";
  id: string = "";
  defaultWeightMeasure: string = "";
  mileage: number = 0;
  storeIdReqParts: boolean = false;
  enterpriseCode: string = "";
  unitOfMeasure: string = "";
  accountType: string = "";
  oktaGroups: string[] = [];
  languageCode: string = "";
  sellingWarehouse: string = "";
  freightQuoteUser: boolean = false;
  suspended: boolean = false;
  internalAccount: boolean = false;
  labor: number = 0;
  firstName: string = "";
  parentCustomer: string = "";
  defaultFreight: string = "";
  lastName: string = "";
  custClass: string = "";
  login: string = "";
  locale: string = "";
  companyNumber: string = "";
  numberFormat: string = "";
  placeOrderAllowed: boolean = false;
  email: string = "";
  taxSuffix: string = "";
  partTerms: string = "";
  defaultSalesType: string = "";
  activeFlag: boolean = false;
  defaultWarehouse: string = "";
  classCode: string = "";
  defaultShipVia: string = "";
  defaultShipVia2: string = "";
  defaultShippingInstructions: string = "";
  customerNumber: string = "";
  erpEnvironment: string = "";
  surchargeRate: number = 0;
  machineTerms: string = "";
  siteId: string = "";
  travel: number = 0;
  currencyCode: string = "";

  subscriptionPOs: { default: string } = { default: "" };

  homeAddress: {
    country: string;
    phoneNumber: string;
    city: string;
    address1: string;
    companyName?: string;
    postalCode: string;
    id: string;
    state: string;
    activeFlag: boolean;
  } = {
    country: "",
    phoneNumber: "",
    city: "",
    address1: "",
    companyName: "",
    postalCode: "",
    id: "",
    state: "",
    activeFlag: false,
  };

  billingAddress: {
    country: string;
    phoneNumber: string;
    city: string;
    address1: string;
    postalCode: string;
    id: string;
    state: string;
    activeFlag: boolean;
    customerName?: string;
  } = {
    country: "",
    phoneNumber: "",
    city: "",
    address1: "",
    postalCode: "",
    id: "",
    state: "",
    activeFlag: false,
    customerName: "",
  };

  appConfig: {
    dateFormat: string;
    viewPartsReturn: boolean;
    showItemNet: boolean;
    salesTypeMinValue: number;
    shvactLoookup: boolean;
    adminEmailLocale: string;
    clearSky: boolean;
    frieghtQuote: boolean;
    showSalesTypeDropdown: boolean;
    freightTermCRule: boolean;
    defaultCurrency: string;
    showCarrier: boolean;
    defaultFreight2: string;
    showShippingInstructions: boolean;
    id: string;
    defaultWeightMeasure: string;
    preventShipToZero: boolean;
    showItemTax: boolean;
    showShipmentTrackNumber: boolean;
    unitOfMeasure: string;
    validSalesTypes: string;
    internationalShipVia: boolean;
    showShippingDescription: boolean;
    csrGroupAdminEmail: string;
    showShippingComments: boolean;
    defaultFreight: string;
    showBroker: boolean;
    createShiptoAddressAllowed: boolean;
    requireCollectAccount: boolean;
    showEstShipDate: boolean;
    validFreightTermsPrimary: string;
    showGstMessage: boolean;
    freeFreightMinValue: number;
    showStoreId: boolean;
    freightType: boolean;
    freeFreight: boolean;
    hazFilterRule: boolean;
    canChangeShipTo: boolean;
    canChangeDefaultShipTo: boolean;
    showLeadTime: boolean;
    defaultSalesType: string;
    defaultWarehouse: string;
    showIncoTerms: boolean;
    freightTerm3Rule: boolean;
    validFreightTermsSecondary: string;
    defaultShipVia: string;
    freightTermPRule: boolean;
    defaultShipVia2: string;
    defaultShippingInstructions: string;
    erpEnvironment: string;
    showShippingServiceLevel: boolean;
    validShippingInstructions: string;
  } = {
    dateFormat: "",
    viewPartsReturn: false,
    showItemNet: false,
    salesTypeMinValue: 0,
    shvactLoookup: false,
    adminEmailLocale: "",
    clearSky: false,
    frieghtQuote: false,
    showSalesTypeDropdown: false,
    freightTermCRule: false,
    defaultCurrency: "",
    showCarrier: false,
    defaultFreight2: "",
    showShippingInstructions: false,
    id: "",
    defaultWeightMeasure: "",
    preventShipToZero: false,
    showItemTax: false,
    showShipmentTrackNumber: false,
    unitOfMeasure: "",
    validSalesTypes: "",
    internationalShipVia: false,
    showShippingDescription: false,
    csrGroupAdminEmail: "",
    showShippingComments: false,
    defaultFreight: "",
    showBroker: false,
    createShiptoAddressAllowed: false,
    requireCollectAccount: false,
    showEstShipDate: false,
    validFreightTermsPrimary: "",
    showGstMessage: false,
    freeFreightMinValue: 0,
    showStoreId: false,
    freightType: false,
    freeFreight: false,
    hazFilterRule: false,
    canChangeShipTo: false,
    canChangeDefaultShipTo: false,
    showLeadTime: false,
    defaultSalesType: "",
    defaultWarehouse: "",
    showIncoTerms: false,
    freightTerm3Rule: false,
    validFreightTermsSecondary: "",
    defaultShipVia: "",
    freightTermPRule: false,
    defaultShipVia2: "",
    defaultShippingInstructions: "",
    erpEnvironment: "",
    showShippingServiceLevel: false,
    validShippingInstructions: "",
  };

  links: {
    method: string;
    rel: string;
    href: string;
  }[] = [];

  allRoles: {
    name: string;
  }[] = [];

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
