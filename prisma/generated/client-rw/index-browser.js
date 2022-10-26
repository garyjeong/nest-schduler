
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.Admin_permissionsScalarFieldEnum = makeEnum({
  id: 'id',
  action: 'action',
  description: 'description'
});

exports.Prisma.Admin_rolesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  created_date: 'created_date',
  modified_date: 'modified_date',
  created_by: 'created_by',
  modified_by: 'modified_by',
  deleted: 'deleted'
});

exports.Prisma.Admin_roles_permissionsScalarFieldEnum = makeEnum({
  permission_id: 'permission_id',
  role_id: 'role_id'
});

exports.Prisma.Admin_usersScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  hash_pass: 'hash_pass',
  first_name: 'first_name',
  last_name: 'last_name',
  phone_mobile: 'phone_mobile',
  address: 'address',
  created_date: 'created_date',
  modified_date: 'modified_date',
  created_by: 'created_by',
  deleted: 'deleted',
  hash_rt: 'hash_rt',
  modified_by: 'modified_by',
  status: 'status',
  agency_id: 'agency_id'
});

exports.Prisma.Admin_users_rolesScalarFieldEnum = makeEnum({
  user_id: 'user_id',
  role_id: 'role_id'
});

exports.Prisma.AgenciesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  logo: 'logo',
  created_date: 'created_date'
});

exports.Prisma.AirportsScalarFieldEnum = makeEnum({
  iata_code: 'iata_code',
  country_code: 'country_code',
  icao_code: 'icao_code',
  name: 'name',
  latitude: 'latitude',
  longitude: 'longitude',
  id: 'id'
});

exports.Prisma.Api_keyScalarFieldEnum = makeEnum({
  client_id: 'client_id',
  key: 'key'
});

exports.Prisma.CategoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  icon: 'icon'
});

exports.Prisma.CitiesScalarFieldEnum = makeEnum({
  code: 'code',
  name: 'name',
  un_locode: 'un_locode',
  latitude: 'latitude',
  longitude: 'longitude',
  alt: 'alt',
  timezone: 'timezone',
  country_code: 'country_code'
});

exports.Prisma.Cities_locationsScalarFieldEnum = makeEnum({
  city_code: 'city_code',
  location_id: 'location_id'
});

exports.Prisma.Cities_translationScalarFieldEnum = makeEnum({
  city_code: 'city_code',
  locale: 'locale',
  city_name: 'city_name'
});

exports.Prisma.Commission_settingScalarFieldEnum = makeEnum({
  id: 'id',
  vendor: 'vendor',
  agency: 'agency',
  payment_type: 'payment_type',
  tag: 'tag',
  calculation_type: 'calculation_type',
  amount: 'amount'
});

exports.Prisma.CountriesScalarFieldEnum = makeEnum({
  code: 'code',
  code_3: 'code_3',
  name: 'name',
  continent: 'continent',
  currency: 'currency'
});

exports.Prisma.Countries_translationScalarFieldEnum = makeEnum({
  country_code: 'country_code',
  locale: 'locale',
  country_name: 'country_name'
});

exports.Prisma.CouponsScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  coupon_name: 'coupon_name',
  brand: 'brand',
  destination: 'destination',
  offer_description: 'offer_description',
  corporate_discount_number: 'corporate_discount_number',
  promotion_code: 'promotion_code',
  min_days: 'min_days',
  car_group: 'car_group',
  pickup_start_time: 'pickup_start_time',
  pickup_end_time: 'pickup_end_time',
  order_start_time: 'order_start_time',
  order_end_time: 'order_end_time',
  issued_count: 'issued_count',
  used_count: 'used_count',
  status: 'status',
  remark: 'remark'
});

exports.Prisma.Error_messagesScalarFieldEnum = makeEnum({
  error_code: 'error_code',
  english_message: 'english_message',
  korean_message: 'korean_message'
});

exports.Prisma.Exchange_rate_historyScalarFieldEnum = makeEnum({
  id: 'id',
  exchange_rate_id: 'exchange_rate_id',
  rate: 'rate',
  date: 'date'
});

exports.Prisma.Exchange_ratesScalarFieldEnum = makeEnum({
  id: 'id',
  from_code: 'from_code',
  to_code: 'to_code',
  rate: 'rate'
});

exports.Prisma.FaqScalarFieldEnum = makeEnum({
  id: 'id',
  question_kr: 'question_kr',
  question_us: 'question_us',
  answer_kr: 'answer_kr',
  answer_us: 'answer_us',
  status: 'status',
  sort_order: 'sort_order',
  subject_id: 'subject_id'
});

exports.Prisma.FilesScalarFieldEnum = makeEnum({
  id: 'id',
  file_key: 'file_key',
  file_url: 'file_url'
});

exports.Prisma.Keyword_faqScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  faq_id: 'faq_id'
});

exports.Prisma.LocalesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code',
  default: 'default'
});

exports.Prisma.LocationScalarFieldEnum = makeEnum({
  id: 'id',
  city_code: 'city_code',
  vendor_id: 'vendor_id',
  oag_code: 'oag_code',
  country_code: 'country_code',
  state: 'state',
  zip_code: 'zip_code',
  phone: 'phone',
  alt_phone: 'alt_phone',
  fax: 'fax',
  telex: 'telex',
  web_url: 'web_url',
  email: 'email',
  latitude: 'latitude',
  longitude: 'longitude',
  open_1_mon: 'open_1_mon',
  close_1_mon: 'close_1_mon',
  open_2_mon: 'open_2_mon',
  close_2_mon: 'close_2_mon',
  open_3_mon: 'open_3_mon',
  close_3_mon: 'close_3_mon',
  open_1_tue: 'open_1_tue',
  close_1_tue: 'close_1_tue',
  open_2_tue: 'open_2_tue',
  close_2_tue: 'close_2_tue',
  open_3_tue: 'open_3_tue',
  close_3_tue: 'close_3_tue',
  open_1_wed: 'open_1_wed',
  close_1_wed: 'close_1_wed',
  open_2_wed: 'open_2_wed',
  close_2_wed: 'close_2_wed',
  open_3_wed: 'open_3_wed',
  close_3_wed: 'close_3_wed',
  open_1_thu: 'open_1_thu',
  close_1_thu: 'close_1_thu',
  open_2_thu: 'open_2_thu',
  close_2_thu: 'close_2_thu',
  open_3_thu: 'open_3_thu',
  close_3_thu: 'close_3_thu',
  open_1_fri: 'open_1_fri',
  close_1_fri: 'close_1_fri',
  open_2_fri: 'open_2_fri',
  close_2_fri: 'close_2_fri',
  open_3_fri: 'open_3_fri',
  close_3_fri: 'close_3_fri',
  open_1_sat: 'open_1_sat',
  close_1_sat: 'close_1_sat',
  open_2_sat: 'open_2_sat',
  close_2_sat: 'close_2_sat',
  open_3_sat: 'open_3_sat',
  close_3_sat: 'close_3_sat',
  open_1_sun: 'open_1_sun',
  close_1_sun: 'close_1_sun',
  open_2_sun: 'open_2_sun',
  close_2_sun: 'close_2_sun',
  open_3_sun: 'open_3_sun',
  close_3_sun: 'close_3_sun',
  loc_type_1: 'loc_type_1',
  loc_type_2: 'loc_type_2',
  city_name: 'city_name',
  category_id: 'category_id'
});

exports.Prisma.Location_descriptionScalarFieldEnum = makeEnum({
  location_id: 'location_id',
  locale: 'locale',
  description: 'description',
  address_1: 'address_1',
  address_2: 'address_2',
  address_3: 'address_3'
});

exports.Prisma.Location_type_1ScalarFieldEnum = makeEnum({
  type: 'type',
  description: 'description'
});

exports.Prisma.Location_type_2ScalarFieldEnum = makeEnum({
  type: 'type',
  description: 'description'
});

exports.Prisma.PackagesScalarFieldEnum = makeEnum({
  price_id: 'price_id',
  service_id: 'service_id'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  order_id: 'order_id',
  user_id: 'user_id',
  IMS_commission: 'IMS_commission',
  agency_id: 'agency_id',
  agency_name: 'agency_name',
  pay_type: 'pay_type',
  exchange_rate: 'exchange_rate',
  first_name: 'first_name',
  korean_name: 'korean_name',
  last_name: 'last_name',
  paid_agency: 'paid_agency',
  paid_supplier_date: 'paid_supplier_date',
  paid_supplier: 'paid_supplier',
  basic_rate: 'basic_rate',
  net: 'net',
  commission: 'commission',
  currency: 'currency',
  service_total_amount: 'service_total_amount',
  service_rate: 'service_rate',
  reservation_id: 'reservation_id',
  supplier: 'supplier',
  imp_uid: 'imp_uid',
  merchant_uid: 'merchant_uid',
  etc_rate: 'etc_rate',
  total_amount: 'total_amount',
  pg_amount: 'pg_amount',
  paid_agency_date: 'paid_agency_date'
});

exports.Prisma.Price_codesScalarFieldEnum = makeEnum({
  id: 'id',
  price_code: 'price_code',
  country_code: 'country_code',
  name: 'name',
  price_type: 'price_type',
  vendor_id: 'vendor_id',
  ITCode: 'ITCode',
  cdpNumber: 'cdpNumber',
  show: 'show',
  insurance: 'insurance',
  ko_name: 'ko_name'
});

exports.Prisma.Promotion_codeScalarFieldEnum = makeEnum({
  cdp: 'cdp',
  pc: 'pc',
  vendor_id: 'vendor_id',
  country: 'country',
  name: 'name'
});

exports.Prisma.ReservationScalarFieldEnum = makeEnum({
  supplier: 'supplier',
  agent_name: 'agent_name',
  agent: 'agent',
  date_request: 'date_request',
  res_status: 'res_status',
  invoice: 'invoice',
  res_id: 'res_id',
  korean_name: 'korean_name',
  first_name: 'first_name',
  last_name: 'last_name',
  pickup_loc: 'pickup_loc',
  return_loc: 'return_loc',
  pickup_datetime: 'pickup_datetime',
  return_datetime: 'return_datetime',
  pay_type: 'pay_type',
  currency: 'currency',
  exchange_rate: 'exchange_rate',
  user_id: 'user_id',
  car_model: 'car_model',
  extra_equipmens: 'extra_equipmens',
  insurance_info: 'insurance_info',
  office_address: 'office_address',
  office_name: 'office_name',
  office_time: 'office_time',
  phone_code: 'phone_code',
  phone_number: 'phone_number',
  services: 'services',
  size_car: 'size_car',
  type_car: 'type_car',
  date_cancel: 'date_cancel',
  email: 'email',
  flight_brand: 'flight_brand',
  flight_number: 'flight_number',
  frequent_flyer: 'frequent_flyer',
  hertz_membership: 'hertz_membership',
  office_second_address: 'office_second_address',
  office_second_name: 'office_second_name',
  office_second_time: 'office_second_time',
  dropFee: 'dropFee',
  rate_amount: 'rate_amount',
  rate_foreigner_amount: 'rate_foreigner_amount',
  tax: 'tax',
  total_amount: 'total_amount',
  total_foreigner_amount: 'total_foreigner_amount'
});

exports.Prisma.ServicesScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  ko_description: 'ko_description',
  details: 'details',
  order: 'order'
});

exports.Prisma.SettingsScalarFieldEnum = makeEnum({
  category: 'category',
  name: 'name',
  value: 'value',
  type: 'type'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.Subject_faqScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TranslationScalarFieldEnum = makeEnum({
  locale_id: 'locale_id',
  message: 'message',
  tag: 'tag'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  hash_pass: 'hash_pass',
  created_date: 'created_date',
  modified_date: 'modified_date',
  deleted: 'deleted',
  hash_rt: 'hash_rt',
  phone: 'phone',
  login_type: 'login_type',
  external_id: 'external_id',
  korean_name: 'korean_name',
  first_name: 'first_name',
  last_name: 'last_name',
  phone_prefix: 'phone_prefix',
  refund_bank: 'refund_bank',
  refund_account_number: 'refund_account_number',
  refund_account_holder: 'refund_account_holder',
  address: 'address',
  hertz_membership: 'hertz_membership',
  airline: 'airline',
  mileage_number: 'mileage_number',
  mailing_email: 'mailing_email',
  mailing_text_msg: 'mailing_text_msg',
  birthdate: 'birthdate'
});

exports.Prisma.VendorsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  logo: 'logo',
  isActive: 'isActive'
});


exports.Prisma.ModelName = makeEnum({
  api_key: 'api_key',
  cities: 'cities',
  cities_translation: 'cities_translation',
  locales: 'locales',
  location: 'location',
  location_description: 'location_description',
  translation: 'translation',
  countries: 'countries',
  countries_translation: 'countries_translation',
  location_type_1: 'location_type_1',
  location_type_2: 'location_type_2',
  vendors: 'vendors',
  airports: 'airports',
  categories: 'categories',
  payment: 'payment',
  exchange_rates: 'exchange_rates',
  admin_permissions: 'admin_permissions',
  admin_roles: 'admin_roles',
  admin_roles_permissions: 'admin_roles_permissions',
  admin_users: 'admin_users',
  admin_users_roles: 'admin_users_roles',
  files: 'files',
  settings: 'settings',
  users: 'users',
  packages: 'packages',
  price_codes: 'price_codes',
  reservation: 'reservation',
  services: 'services',
  agencies: 'agencies',
  commission_setting: 'commission_setting',
  coupons: 'coupons',
  promotion_code: 'promotion_code',
  faq: 'faq',
  error_messages: 'error_messages',
  exchange_rate_history: 'exchange_rate_history',
  subject_faq: 'subject_faq',
  keyword_faq: 'keyword_faq',
  cities_locations: 'cities_locations'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
