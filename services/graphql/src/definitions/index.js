const { gql } = require('apollo-server');

module.exports = gql`

  scalar CompanyUpdateUpload
  scalar CompanyUpdateDate

  type Query {
    ping: String!
    config: CompanyUpdateConfiguration!
    submission(id: String!): CompanyUpdateSubmission!
    submissions: [CompanyUpdateSubmission!]!
    submissionCount: Int!
  }

  type Mutation {
    company(input: CompanyUpdateSubmissionInput!): CompanyUpdateSubmission!
    complete(id: String!): String!
    singleUpload(file: CompanyUpdateUpload!): String!
  }

  enum ContactTypes {
    sales
    listing
    public
  }

  type CompanyUpdateConfiguration {
    domain: String!
    logo: String!
    ids: [Int!]!
    isPmmi: Boolean!
  }

  type CompanyUpdateSubmission {
    id: String!
    submitted: CompanyUpdateDate!
    reviewed: Boolean!
    name: String!
    hash: String!
    email: String!
    companyName: String
    payload: String!
  }

  input CompanyUpdateSubmissionInput {
    name: String!
    email: String!
    hash: String!
    payload: CompanyUpdatePayloadInput!
  }

  input CompanyUpdatePayloadInput {
    name: String
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    country: String
    phone: String
    tollfree: String
    fax: String
    website: String
    type: String
    email: String
    body: String

    teaser: String
    numberOfEmployees: String
    trainingInformation: String
    yearsInOperation: String
    salesRegion: String
    servicesProvided: String
    salesChannels: String
    productSummary: String
    serviceInformation: String
    warrantyInformation: String

    sectionIds: [Int!]
    logo: String
  }

`;
