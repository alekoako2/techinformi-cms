import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};



export type AuthPayload = {
   __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};


export type Department = {
   __typename?: 'Department';
  translation?: Maybe<Array<Maybe<DepartmentTranslation>>>;
};


export type DepartmentTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type DepartmentTranslation = {
   __typename?: 'DepartmentTranslation';
  name?: Maybe<Scalars['String']>;
  language: Language;
};

export type Employee = {
   __typename?: 'Employee';
  id: Scalars['ID'];
  inpDate?: Maybe<Scalars['String']>;
  workExperience?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  tel?: Maybe<Scalars['String']>;
  department?: Maybe<Department>;
  position?: Maybe<EmployeePosition>;
  translation?: Maybe<Array<Maybe<EmployeeTranslation>>>;
};


export type EmployeeTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type EmployeePosition = {
   __typename?: 'EmployeePosition';
  translation?: Maybe<Array<Maybe<EmployeePositionTranslation>>>;
};


export type EmployeePositionTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type EmployeePositionTranslation = {
   __typename?: 'EmployeePositionTranslation';
  name?: Maybe<Scalars['String']>;
  language: Language;
};

export type EmployeeTranslation = {
   __typename?: 'EmployeeTranslation';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  language: Language;
};

export type Expert = {
   __typename?: 'Expert';
  id?: Maybe<Scalars['ID']>;
  inpDate?: Maybe<Scalars['String']>;
  workExperience?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  publications?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<ExpertTranslation>>>;
  oecds?: Maybe<Array<Maybe<Oecd>>>;
  languages?: Maybe<Array<Maybe<Language>>>;
  author?: Maybe<User>;
};


export type ExpertTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type ExpertInput = {
  inpDate?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  workExperience?: Maybe<Scalars['String']>;
  tel?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  publications?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<ExpertTranslationInput>>>;
  oecds?: Maybe<Array<Maybe<OecdInput>>>;
  languages?: Maybe<Array<Maybe<LanguageInput>>>;
};

export type ExpertQueryInput = {
  translation?: Maybe<ExpertTranslationInput>;
  oecd?: Maybe<Scalars['String']>;
};

export type ExpertTranslation = {
   __typename?: 'ExpertTranslation';
  fullName?: Maybe<Scalars['String']>;
  qualification?: Maybe<Scalars['String']>;
  academicDegree?: Maybe<Scalars['String']>;
  specialization?: Maybe<Scalars['String']>;
  workingPlace?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type ExpertTranslationInput = {
  fullName?: Maybe<Scalars['String']>;
  qualification?: Maybe<Scalars['String']>;
  academicDegree?: Maybe<Scalars['String']>;
  specialization?: Maybe<Scalars['String']>;
  workingPlace?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE'
}

export type Journal = {
   __typename?: 'Journal';
  id?: Maybe<Scalars['String']>;
  pubNumber?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<QrjTranslation>>>;
};


export type JournalTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type JournalInput = {
  id?: Maybe<Scalars['String']>;
  pub_num?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<QrjTranslationInput>>;
};

export type Keyword = {
   __typename?: 'Keyword';
  name?: Maybe<Scalars['String']>;
};

export type Language = {
   __typename?: 'Language';
  code?: Maybe<LanguageCode>;
  name?: Maybe<Scalars['String']>;
};

export enum LanguageCode {
  KA = 'KA',
  EN = 'EN',
  FR = 'FR',
  DE = 'DE',
  RU = 'RU',
  ES = 'ES',
  IT = 'IT'
}

export type LanguageInput = {
  code?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  signUp: AuthPayload;
  signIn: AuthPayload;
  createQrjJournal?: Maybe<QrjJournal>;
  updateQrjJournal?: Maybe<QrjJournal>;
  deleteQrjJournal?: Maybe<QrjJournal>;
  createQrjPublication?: Maybe<QrjPublication>;
  updateQrjPublication?: Maybe<QrjPublication>;
  deleteQrjPublication?: Maybe<QrjPublication>;
  createOecd?: Maybe<Oecd>;
  updateOecd?: Maybe<Oecd>;
  deleteOecd?: Maybe<Oecd>;
  createTechnologyTransferAndInnovationOrganization?: Maybe<TechnologyTransferAndInnovationOrganization>;
  updateTechnologyTransferAndInnovationOrganization?: Maybe<TechnologyTransferAndInnovationOrganization>;
  deleteTechnologyTransferAndInnovationOrganization?: Maybe<TechnologyTransferAndInnovationOrganization>;
  createTechnologyTransferNetwork?: Maybe<TechnologyTransferNetwork>;
  updateTechnologyTransferNetwork?: Maybe<TechnologyTransferNetwork>;
  deleteTechnologyTransferNetwork?: Maybe<TechnologyTransferNetwork>;
  updateResearchProject?: Maybe<ResearchProject>;
  createResearchProject?: Maybe<ResearchProject>;
  deleteResearchProject?: Maybe<ResearchProject>;
  createExpert?: Maybe<Expert>;
  updateExpert?: Maybe<Expert>;
  deleteExpert?: Maybe<Expert>;
  createNews?: Maybe<News>;
  updateNews?: Maybe<News>;
  deleteNews?: Maybe<News>;
  createQrj?: Maybe<Qrj>;
  updateQrj?: Maybe<Qrj>;
  deleteQrj?: Maybe<Qrj>;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationCreateQrjJournalArgs = {
  input?: Maybe<QrjJournalInput>;
};


export type MutationUpdateQrjJournalArgs = {
  id: Scalars['ID'];
  input?: Maybe<QrjJournalInput>;
};


export type MutationDeleteQrjJournalArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateQrjPublicationArgs = {
  input?: Maybe<QrjPublicationCreateInput>;
};


export type MutationUpdateQrjPublicationArgs = {
  input?: Maybe<QrjPublicationUpdateInput>;
};


export type MutationDeleteQrjPublicationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateOecdArgs = {
  input?: Maybe<OecdInput>;
};


export type MutationUpdateOecdArgs = {
  id: Scalars['ID'];
  input?: Maybe<OecdInput>;
};


export type MutationDeleteOecdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateTechnologyTransferAndInnovationOrganizationArgs = {
  input?: Maybe<TechnologyTransferAndInnovationOrganizationInput>;
};


export type MutationUpdateTechnologyTransferAndInnovationOrganizationArgs = {
  id: Scalars['ID'];
  input?: Maybe<TechnologyTransferAndInnovationOrganizationInput>;
};


export type MutationDeleteTechnologyTransferAndInnovationOrganizationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateTechnologyTransferNetworkArgs = {
  input?: Maybe<TechnologyTransferNetworkInput>;
};


export type MutationUpdateTechnologyTransferNetworkArgs = {
  id: Scalars['ID'];
  input?: Maybe<TechnologyTransferNetworkInput>;
};


export type MutationDeleteTechnologyTransferNetworkArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationUpdateResearchProjectArgs = {
  id: Scalars['ID'];
  input?: Maybe<ResearchProjectInput>;
};


export type MutationCreateResearchProjectArgs = {
  input?: Maybe<ResearchProjectInput>;
};


export type MutationDeleteResearchProjectArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateExpertArgs = {
  input?: Maybe<ExpertInput>;
};


export type MutationUpdateExpertArgs = {
  id: Scalars['ID'];
  input?: Maybe<ExpertInput>;
};


export type MutationDeleteExpertArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateNewsArgs = {
  input?: Maybe<NewsInput>;
};


export type MutationUpdateNewsArgs = {
  id: Scalars['ID'];
  input?: Maybe<NewsInput>;
};


export type MutationDeleteNewsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateQrjArgs = {
  input?: Maybe<QrjInput>;
};


export type MutationUpdateQrjArgs = {
  id: Scalars['ID'];
  input?: Maybe<QrjInput>;
};


export type MutationDeleteQrjArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type News = {
   __typename?: 'News';
  id: Scalars['ID'];
  translation?: Maybe<Array<Maybe<NewsTranslation>>>;
  author: User;
};


export type NewsTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type NewsInput = {
  translation?: Maybe<Array<Maybe<NewsTranslationInput>>>;
};

export type NewsTranslation = {
   __typename?: 'NewsTranslation';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  language: Language;
};

export type NewsTranslationInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type Oecd = {
   __typename?: 'Oecd';
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  translation: Array<OecdTranslation>;
};


export type OecdTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type OecdInput = {
  code?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<OecdTranslationInput>>;
};

export type OecdsQueryInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type OecdTranslation = {
   __typename?: 'OecdTranslation';
  name: Scalars['String'];
};

export type OecdTranslationInput = {
  name?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type Qrj = {
   __typename?: 'Qrj';
  id: Scalars['ID'];
  year?: Maybe<Scalars['String']>;
  journal?: Maybe<Array<Maybe<Journal>>>;
  author: User;
};

export type QrjInput = {
  year?: Maybe<Scalars['String']>;
  journal?: Maybe<Array<Maybe<JournalInput>>>;
};

export type QrjJournal = {
   __typename?: 'QrjJournal';
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  translation: Array<QrjJournalTranslation>;
};


export type QrjJournalTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type QrjJournalInput = {
  code?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<QrjJournalTranslationInput>>;
};

export type QrjJournalsQueryInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type QrjJournalTranslation = {
   __typename?: 'QrjJournalTranslation';
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type QrjJournalTranslationInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type QrjPublication = {
   __typename?: 'QrjPublication';
  id?: Maybe<Scalars['ID']>;
  edited?: Maybe<Scalars['Boolean']>;
  index?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  inputDate?: Maybe<Scalars['String']>;
  qrjJournal?: Maybe<QrjJournal>;
  oecd?: Maybe<Oecd>;
  translation?: Maybe<Array<Maybe<QrjPublicationTranslation>>>;
};


export type QrjPublicationTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type QrjPublicationCreateInput = {
  index: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  qrjJournal?: Maybe<Scalars['String']>;
  inputDate?: Maybe<Scalars['String']>;
  oecd?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<QrjPublicationTranslationInput>>>;
};

export type QrjPublicationQueryInput = {
  index?: Maybe<Scalars['String']>;
  translation?: Maybe<QrjPublicationTranslationInput>;
  qrjJournal?: Maybe<Scalars['String']>;
  oecd?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearStart?: Maybe<Scalars['String']>;
  yearEnd?: Maybe<Scalars['String']>;
};

export type QrjPublicationTranslation = {
   __typename?: 'QrjPublicationTranslation';
  title?: Maybe<Scalars['String']>;
  publicationAuthor?: Maybe<Scalars['String']>;
  publicationLang?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type QrjPublicationTranslationInput = {
  title?: Maybe<Scalars['String']>;
  publicationAuthor?: Maybe<Scalars['String']>;
  publicationLang?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type QrjPublicationUpdateInput = {
  id: Scalars['ID'];
  index: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  edited?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['String']>;
  qrjJournal?: Maybe<Scalars['String']>;
  inputDate?: Maybe<Scalars['String']>;
  oecd?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<QrjPublicationTranslationInput>>>;
};

export type QrjTranslation = {
   __typename?: 'QrjTranslation';
  address?: Maybe<Scalars['String']>;
  language: Language;
};

export type QrjTranslationInput = {
  address?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type Query = {
   __typename?: 'Query';
  me?: Maybe<User>;
  countQrjJournals?: Maybe<Scalars['Int']>;
  qrjJournals: Array<QrjJournal>;
  qrjJournal: QrjJournal;
  countQrjPublications?: Maybe<Scalars['Int']>;
  qrjPublications: Array<QrjPublication>;
  qrjPublication: QrjPublication;
  countOecds?: Maybe<Scalars['Int']>;
  oecds: Array<Oecd>;
  oecd: Oecd;
  countTechnologyTransferAndInnovationOrganizations?: Maybe<Scalars['Int']>;
  technologyTransferAndInnovationOrganizations: Array<TechnologyTransferAndInnovationOrganization>;
  technologyTransferAndInnovationOrganization: TechnologyTransferAndInnovationOrganization;
  countTechnologyTransferNetworks?: Maybe<Scalars['Int']>;
  technologyTransferNetworks: Array<TechnologyTransferNetwork>;
  technologyTransferNetwork: TechnologyTransferNetwork;
  researchProjects: Array<ResearchProject>;
  countResearchProjects?: Maybe<Scalars['Int']>;
  researchProject: ResearchProject;
  employees: Array<Employee>;
  countExperts?: Maybe<Scalars['Int']>;
  experts: Array<Expert>;
  expert: Expert;
  countNewses?: Maybe<Scalars['Int']>;
  newses: Array<News>;
  news: News;
  countQrjs?: Maybe<Scalars['Int']>;
  qrjs: Array<Qrj>;
  qrj: Qrj;
};


export type QueryMeArgs = {
  language?: Maybe<LanguageCode>;
};


export type QueryCountQrjJournalsArgs = {
  query?: Maybe<QrjJournalsQueryInput>;
};


export type QueryQrjJournalsArgs = {
  query?: Maybe<QrjJournalsQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryQrjJournalArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCountQrjPublicationsArgs = {
  query?: Maybe<QrjPublicationQueryInput>;
};


export type QueryQrjPublicationsArgs = {
  query?: Maybe<QrjPublicationQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryQrjPublicationArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCountOecdsArgs = {
  query?: Maybe<OecdsQueryInput>;
};


export type QueryOecdsArgs = {
  query?: Maybe<OecdsQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOecdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryTechnologyTransferAndInnovationOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTechnologyTransferAndInnovationOrganizationArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryTechnologyTransferNetworksArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTechnologyTransferNetworkArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryResearchProjectsArgs = {
  query?: Maybe<ResearchProjectQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCountResearchProjectsArgs = {
  query?: Maybe<ResearchProjectQueryInput>;
};


export type QueryResearchProjectArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryEmployeesArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCountExpertsArgs = {
  query?: Maybe<ExpertQueryInput>;
};


export type QueryExpertsArgs = {
  query?: Maybe<ExpertQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryExpertArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryNewsesArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryNewsArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryQrjsArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryQrjArgs = {
  id?: Maybe<Scalars['String']>;
};

export type ResearchProject = {
   __typename?: 'ResearchProject';
  translation?: Maybe<Array<Maybe<ResearchProjectTranslation>>>;
  participatingInstitutionCountryCity?: Maybe<Scalars['String']>;
  participatingInstitutionEmail?: Maybe<Scalars['String']>;
  participatingInstitutionName?: Maybe<Scalars['String']>;
  participatingInstitutionTel?: Maybe<Scalars['String']>;
  participatingInstitutionWeb?: Maybe<Scalars['String']>;
  researchExecutionBasis?: Maybe<Scalars['String']>;
  organizationShortName?: Maybe<Scalars['String']>;
  leaderAcademicDegree?: Maybe<Scalars['String']>;
  organizationAddress?: Maybe<Scalars['String']>;
  researchDirection?: Maybe<Scalars['String']>;
  organizationIndex?: Maybe<Scalars['String']>;
  researchExecutors?: Maybe<Scalars['String']>;
  organizationName?: Maybe<Scalars['String']>;
  organizationCode?: Maybe<Scalars['String']>;
  organizationHead?: Maybe<Scalars['String']>;
  organizationCity?: Maybe<Scalars['String']>;
  organizationTel?: Maybe<Scalars['String']>;
  organizationWeb?: Maybe<Scalars['String']>;
  leaderPosition?: Maybe<Scalars['String']>;
  leaderMobile?: Maybe<Scalars['String']>;
  leaderEmail?: Maybe<Scalars['String']>;
  annotation?: Maybe<Scalars['String']>;
  leaderName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  leaderTel?: Maybe<Scalars['String']>;
  financing?: Maybe<Scalars['String']>;
  research?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  inpDate?: Maybe<Scalars['String']>;
  regDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  regNumb?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['String']>;
  oecds?: Maybe<Array<Maybe<Oecd>>>;
  note?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
};


export type ResearchProjectTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type ResearchProjectInput = {
  researchExecutionBasis?: Maybe<Scalars['String']>;
  researchDirection?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  inpDate?: Maybe<Scalars['String']>;
  regDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  regNumb?: Maybe<Scalars['String']>;
  research?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  annotation?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Int']>;
  organizationName?: Maybe<Scalars['String']>;
  organizationShortName?: Maybe<Scalars['String']>;
  organizationCode?: Maybe<Scalars['String']>;
  organizationHead?: Maybe<Scalars['String']>;
  organizationCity?: Maybe<Scalars['String']>;
  organizationAddress?: Maybe<Scalars['String']>;
  organizationIndex?: Maybe<Scalars['String']>;
  organizationTel?: Maybe<Scalars['String']>;
  organizationWeb?: Maybe<Scalars['String']>;
  participatingInstitutionName?: Maybe<Scalars['String']>;
  participatingInstitutionCountryCity?: Maybe<Scalars['String']>;
  participatingInstitutionTel?: Maybe<Scalars['String']>;
  participatingInstitutionEmail?: Maybe<Scalars['String']>;
  participatingInstitutionWeb?: Maybe<Scalars['String']>;
  leaderName?: Maybe<Scalars['String']>;
  leaderPosition?: Maybe<Scalars['String']>;
  leaderAcademicDegree?: Maybe<Scalars['String']>;
  leaderTel?: Maybe<Scalars['String']>;
  leaderMobile?: Maybe<Scalars['String']>;
  leaderEmail?: Maybe<Scalars['String']>;
  researchExecutors?: Maybe<Scalars['String']>;
  financing?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  pincode?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<ResearchProjectTranslationInput>>>;
  oecds?: Maybe<Array<Maybe<OecdInput>>>;
  languages?: Maybe<Array<Maybe<LanguageInput>>>;
};

export type ResearchProjectQueryInput = {
  principalExecutingOrganization?: Maybe<Scalars['String']>;
  yearResearchProgressStartOrEndYear?: Maybe<Scalars['Date']>;
  leaderExecutors?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
  fromYear?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  oecd?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['Date']>;
};

export type ResearchProjectTranslation = {
   __typename?: 'ResearchProjectTranslation';
  language?: Maybe<Language>;
  key?: Maybe<Array<Maybe<Keyword>>>;
  title?: Maybe<Scalars['String']>;
};

export type ResearchProjectTranslationInput = {
  title?: Maybe<Scalars['String']>;
  key?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<LanguageCode>;
};

export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  CUSTOMER = 'CUSTOMER'
}

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  translation?: Maybe<Array<UserTranslationInput>>;
};

export type TechnologyTransferAndInnovationOrganization = {
   __typename?: 'TechnologyTransferAndInnovationOrganization';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  author: User;
};

export type TechnologyTransferAndInnovationOrganizationInput = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type TechnologyTransferNetwork = {
   __typename?: 'TechnologyTransferNetwork';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  author: User;
};

export type TechnologyTransferNetworkInput = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  role: Role;
  createdAt: Scalars['String'];
  translation?: Maybe<Array<UserTranslation>>;
  qrjJournals: Array<QrjJournal>;
  qrjPublications: Array<QrjPublication>;
  oecds: Array<Oecd>;
  technologyTransferAndInnovationOrganizations: Array<TechnologyTransferAndInnovationOrganization>;
  technologyTransferNetworks: Array<TechnologyTransferNetwork>;
  researchProjects: Array<ResearchProject>;
  experts: Array<Expert>;
  newses: Array<News>;
  qrjs: Array<Qrj>;
};


export type UserTranslationArgs = {
  language?: Maybe<LanguageCode>;
};


export type UserQrjJournalsArgs = {
  language: LanguageCode;
};


export type UserQrjPublicationsArgs = {
  language: LanguageCode;
};


export type UserOecdsArgs = {
  language: LanguageCode;
};


export type UserTechnologyTransferAndInnovationOrganizationsArgs = {
  language: LanguageCode;
};


export type UserTechnologyTransferNetworksArgs = {
  language: LanguageCode;
};


export type UserResearchProjectsArgs = {
  language: LanguageCode;
};


export type UserExpertsArgs = {
  language: LanguageCode;
};


export type UserNewsesArgs = {
  language: LanguageCode;
};


export type UserQrjsArgs = {
  language: LanguageCode;
};

export type UserTranslation = {
   __typename?: 'UserTranslation';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  language: Language;
};

export type UserTranslationInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  language: LanguageCode;
};

export type SignInMutationVariables = {
  languageCode: LanguageCode;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'role'>
      & { translation?: Maybe<Array<(
        { __typename?: 'UserTranslation' }
        & Pick<UserTranslation, 'firstName' | 'lastName'>
      )>> }
    ) }
  ) }
);

export type OecdsQueryVariables = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  query?: Maybe<OecdsQueryInput>;
  languageCode?: Maybe<LanguageCode>;
};


export type OecdsQuery = (
  { __typename?: 'Query' }
  & { oecds: Array<(
    { __typename?: 'Oecd' }
    & Pick<Oecd, 'id' | 'code'>
    & { translation: Array<(
      { __typename?: 'OecdTranslation' }
      & Pick<OecdTranslation, 'name'>
    )> }
  )> }
);

export type QrjJournalsQueryVariables = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  query?: Maybe<QrjJournalsQueryInput>;
  languageCode?: Maybe<LanguageCode>;
};


export type QrjJournalsQuery = (
  { __typename?: 'Query' }
  & { qrjJournals: Array<(
    { __typename?: 'QrjJournal' }
    & Pick<QrjJournal, 'id' | 'code'>
    & { translation: Array<(
      { __typename?: 'QrjJournalTranslation' }
      & Pick<QrjJournalTranslation, 'name' | 'address'>
    )> }
  )> }
);

export type UpdateQrjPublicationMutationVariables = {
  languageCode?: Maybe<LanguageCode>;
  input?: Maybe<QrjPublicationUpdateInput>;
};


export type UpdateQrjPublicationMutation = (
  { __typename?: 'Mutation' }
  & { updateQrjPublication?: Maybe<(
    { __typename?: 'QrjPublication' }
    & Pick<QrjPublication, 'id' | 'edited' | 'index'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'QrjPublicationTranslation' }
      & Pick<QrjPublicationTranslation, 'title' | 'abstract'>
    )>>> }
  )> }
);

export type CreateQrjPublicationMutationVariables = {
  languageCode?: Maybe<LanguageCode>;
  input?: Maybe<QrjPublicationCreateInput>;
};


export type CreateQrjPublicationMutation = (
  { __typename?: 'Mutation' }
  & { createQrjPublication?: Maybe<(
    { __typename?: 'QrjPublication' }
    & Pick<QrjPublication, 'id' | 'edited' | 'index'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'QrjPublicationTranslation' }
      & Pick<QrjPublicationTranslation, 'title' | 'abstract'>
    )>>> }
  )> }
);

export type DeleteQrjPublicationMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeleteQrjPublicationMutation = (
  { __typename?: 'Mutation' }
  & { deleteQrjPublication?: Maybe<(
    { __typename?: 'QrjPublication' }
    & Pick<QrjPublication, 'index'>
  )> }
);

export type QrjPublicationsQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  query?: Maybe<QrjPublicationQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QrjPublicationsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'countQrjPublications'>
  & { qrjPublications: Array<(
    { __typename?: 'QrjPublication' }
    & Pick<QrjPublication, 'id' | 'edited' | 'index'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'QrjPublicationTranslation' }
      & Pick<QrjPublicationTranslation, 'title' | 'abstract'>
    )>>> }
  )> }
);

export type QrjPublicationQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  id?: Maybe<Scalars['String']>;
};


export type QrjPublicationQuery = (
  { __typename?: 'Query' }
  & { qrjPublication: (
    { __typename?: 'QrjPublication' }
    & Pick<QrjPublication, 'index' | 'year' | 'number' | 'pages' | 'inputDate'>
    & { qrjJournal?: Maybe<(
      { __typename?: 'QrjJournal' }
      & Pick<QrjJournal, 'code'>
      & { translation: Array<(
        { __typename?: 'QrjJournalTranslation' }
        & Pick<QrjJournalTranslation, 'name' | 'address'>
      )> }
    )>, oecd?: Maybe<(
      { __typename?: 'Oecd' }
      & Pick<Oecd, 'code'>
      & { translation: Array<(
        { __typename?: 'OecdTranslation' }
        & Pick<OecdTranslation, 'name'>
      )> }
    )>, translation?: Maybe<Array<Maybe<(
      { __typename?: 'QrjPublicationTranslation' }
      & Pick<QrjPublicationTranslation, 'title' | 'publicationAuthor' | 'publicationLang' | 'abstract'>
    )>>> }
  ) }
);

export type ResearchProjectsQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  query?: Maybe<ResearchProjectQueryInput>;
};


export type ResearchProjectsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'countResearchProjects'>
  & { researchProjects: Array<(
    { __typename?: 'ResearchProject' }
    & Pick<ResearchProject, 'id' | 'leaderName' | 'researchExecutors' | 'organizationName' | 'endDate'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'ResearchProjectTranslation' }
      & Pick<ResearchProjectTranslation, 'title'>
      & { key?: Maybe<Array<Maybe<(
        { __typename?: 'Keyword' }
        & Pick<Keyword, 'name'>
      )>>> }
    )>>> }
  )> }
);

export type ResearchProjectQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  id?: Maybe<Scalars['String']>;
};


export type ResearchProjectQuery = (
  { __typename?: 'Query' }
  & { researchProject: (
    { __typename?: 'ResearchProject' }
    & Pick<ResearchProject, 'inpDate' | 'regDate' | 'startDate' | 'endDate' | 'regNumb' | 'research' | 'researchDirection' | 'researchExecutionBasis' | 'abstract' | 'annotation' | 'budget' | 'organizationName' | 'organizationShortName' | 'organizationCode' | 'organizationHead' | 'organizationCity' | 'organizationAddress' | 'organizationIndex' | 'organizationTel' | 'organizationWeb' | 'participatingInstitutionName' | 'participatingInstitutionCountryCity' | 'participatingInstitutionTel' | 'participatingInstitutionEmail' | 'participatingInstitutionWeb' | 'leaderName' | 'leaderPosition' | 'leaderAcademicDegree' | 'leaderTel' | 'leaderMobile' | 'leaderEmail' | 'researchExecutors' | 'financing' | 'note' | 'pincode'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'ResearchProjectTranslation' }
      & Pick<ResearchProjectTranslation, 'title'>
      & { key?: Maybe<Array<Maybe<(
        { __typename?: 'Keyword' }
        & Pick<Keyword, 'name'>
      )>>> }
    )>>>, oecds?: Maybe<Array<Maybe<(
      { __typename?: 'Oecd' }
      & Pick<Oecd, 'code'>
      & { translation: Array<(
        { __typename?: 'OecdTranslation' }
        & Pick<OecdTranslation, 'name'>
      )> }
    )>>> }
  ) }
);

export type ExpertsQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  query?: Maybe<ExpertQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ExpertsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'countExperts'>
  & { experts: Array<(
    { __typename?: 'Expert' }
    & Pick<Expert, 'id' | 'inpDate'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'ExpertTranslation' }
      & Pick<ExpertTranslation, 'fullName' | 'specialization'>
    )>>>, oecds?: Maybe<Array<Maybe<(
      { __typename?: 'Oecd' }
      & { translation: Array<(
        { __typename?: 'OecdTranslation' }
        & Pick<OecdTranslation, 'name'>
      )> }
    )>>> }
  )> }
);

export type ExpertQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  id?: Maybe<Scalars['String']>;
};


export type ExpertQuery = (
  { __typename?: 'Query' }
  & { expert: (
    { __typename?: 'Expert' }
    & Pick<Expert, 'email' | 'publications' | 'workExperience'>
    & { languages?: Maybe<Array<Maybe<(
      { __typename?: 'Language' }
      & Pick<Language, 'name'>
    )>>>, translation?: Maybe<Array<Maybe<(
      { __typename?: 'ExpertTranslation' }
      & Pick<ExpertTranslation, 'fullName' | 'qualification' | 'academicDegree' | 'specialization' | 'workingPlace' | 'position'>
    )>>>, oecds?: Maybe<Array<Maybe<(
      { __typename?: 'Oecd' }
      & { translation: Array<(
        { __typename?: 'OecdTranslation' }
        & Pick<OecdTranslation, 'name'>
      )> }
    )>>> }
  ) }
);

export const SignInDocument = gql`
    mutation signIn($languageCode: LanguageCode!, $email: String!, $password: String!) {
  signIn(input: {email: $email, password: $password}) {
    user {
      email
      role
      translation(language: $languageCode) {
        firstName
        lastName
      }
    }
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignInGQL extends Apollo.Mutation<SignInMutation, SignInMutationVariables> {
    document = SignInDocument;
    
  }
export const OecdsDocument = gql`
    query Oecds($first: Int, $skip: Int, $orderBy: String, $query: OecdsQueryInput, $languageCode: LanguageCode) {
  oecds(first: $first, skip: $skip, orderBy: $orderBy, query: $query) {
    id
    code
    translation(language: $languageCode) {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OecdsGQL extends Apollo.Query<OecdsQuery, OecdsQueryVariables> {
    document = OecdsDocument;
    
  }
export const QrjJournalsDocument = gql`
    query QrjJournals($first: Int, $skip: Int, $orderBy: String, $query: QrjJournalsQueryInput, $languageCode: LanguageCode) {
  qrjJournals(first: $first, skip: $skip, orderBy: $orderBy, query: $query) {
    id
    code
    translation(language: $languageCode) {
      name
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QrjJournalsGQL extends Apollo.Query<QrjJournalsQuery, QrjJournalsQueryVariables> {
    document = QrjJournalsDocument;
    
  }
export const UpdateQrjPublicationDocument = gql`
    mutation UpdateQrjPublication($languageCode: LanguageCode, $input: QrjPublicationUpdateInput) {
  updateQrjPublication(input: $input) {
    id
    edited
    index
    translation(language: $languageCode) {
      title
      abstract
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateQrjPublicationGQL extends Apollo.Mutation<UpdateQrjPublicationMutation, UpdateQrjPublicationMutationVariables> {
    document = UpdateQrjPublicationDocument;
    
  }
export const CreateQrjPublicationDocument = gql`
    mutation CreateQrjPublication($languageCode: LanguageCode, $input: QrjPublicationCreateInput) {
  createQrjPublication(input: $input) {
    id
    edited
    index
    translation(language: $languageCode) {
      title
      abstract
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateQrjPublicationGQL extends Apollo.Mutation<CreateQrjPublicationMutation, CreateQrjPublicationMutationVariables> {
    document = CreateQrjPublicationDocument;
    
  }
export const DeleteQrjPublicationDocument = gql`
    mutation DeleteQrjPublication($id: ID) {
  deleteQrjPublication(id: $id) {
    index
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteQrjPublicationGQL extends Apollo.Mutation<DeleteQrjPublicationMutation, DeleteQrjPublicationMutationVariables> {
    document = DeleteQrjPublicationDocument;
    
  }
export const QrjPublicationsDocument = gql`
    query QrjPublications($languageCode: LanguageCode, $query: QrjPublicationQueryInput, $first: Int, $skip: Int, $orderBy: String) {
  qrjPublications(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
    id
    edited
    index
    translation(language: $languageCode) {
      title
      abstract
    }
  }
  countQrjPublications(query: $query)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QrjPublicationsGQL extends Apollo.Query<QrjPublicationsQuery, QrjPublicationsQueryVariables> {
    document = QrjPublicationsDocument;
    
  }
export const QrjPublicationDocument = gql`
    query QrjPublication($languageCode: LanguageCode, $id: String) {
  qrjPublication(id: $id) {
    index
    year
    number
    pages
    inputDate
    qrjJournal {
      code
      translation(language: $languageCode) {
        name
        address
      }
    }
    oecd {
      code
      translation(language: $languageCode) {
        name
      }
    }
    translation {
      title
      publicationAuthor
      publicationLang
      abstract
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QrjPublicationGQL extends Apollo.Query<QrjPublicationQuery, QrjPublicationQueryVariables> {
    document = QrjPublicationDocument;
    
  }
export const ResearchProjectsDocument = gql`
    query ResearchProjects($languageCode: LanguageCode, $first: Int, $skip: Int, $query: ResearchProjectQueryInput) {
  researchProjects(query: $query, first: $first, skip: $skip) {
    id
    leaderName
    researchExecutors
    organizationName
    endDate
    translation(language: $languageCode) {
      title
      key {
        name
      }
    }
  }
  countResearchProjects(query: $query)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchProjectsGQL extends Apollo.Query<ResearchProjectsQuery, ResearchProjectsQueryVariables> {
    document = ResearchProjectsDocument;
    
  }
export const ResearchProjectDocument = gql`
    query ResearchProject($languageCode: LanguageCode, $id: String) {
  researchProject(id: $id) {
    inpDate
    regDate
    startDate
    endDate
    regNumb
    research
    researchDirection
    researchExecutionBasis
    abstract
    annotation
    budget
    organizationName
    organizationShortName
    organizationCode
    organizationHead
    organizationCity
    organizationAddress
    organizationIndex
    organizationTel
    organizationWeb
    participatingInstitutionName
    participatingInstitutionCountryCity
    participatingInstitutionTel
    participatingInstitutionEmail
    participatingInstitutionWeb
    leaderName
    leaderPosition
    leaderAcademicDegree
    leaderTel
    leaderMobile
    leaderEmail
    researchExecutors
    financing
    note
    pincode
    translation(language: $languageCode) {
      title
      key {
        name
      }
    }
    oecds {
      code
      translation(language: $languageCode) {
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchProjectGQL extends Apollo.Query<ResearchProjectQuery, ResearchProjectQueryVariables> {
    document = ResearchProjectDocument;
    
  }
export const ExpertsDocument = gql`
    query Experts($languageCode: LanguageCode, $query: expertQueryInput, $first: Int, $skip: Int) {
  experts(query: $query, first: $first, skip: $skip) {
    id
    translation(language: $languageCode) {
      fullName
      specialization
    }
    inpDate
    oecds {
      translation(language: $languageCode) {
        name
      }
    }
  }
  countExperts(query: $query)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExpertsGQL extends Apollo.Query<ExpertsQuery, ExpertsQueryVariables> {
    document = ExpertsDocument;
    
  }
export const ExpertDocument = gql`
    query Expert($languageCode: LanguageCode, $id: String) {
  expert(id: $id) {
    email
    publications
    workExperience
    languages {
      name
    }
    translation(language: $languageCode) {
      fullName
      qualification
      academicDegree
      specialization
      workingPlace
      position
    }
    oecds {
      translation(language: $languageCode) {
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExpertGQL extends Apollo.Query<ExpertQuery, ExpertQueryVariables> {
    document = ExpertDocument;
    
  }

export const SignIn = gql`
    mutation signIn($languageCode: LanguageCode!, $email: String!, $password: String!) {
  signIn(input: {email: $email, password: $password}) {
    user {
      email
      role
      translation(language: $languageCode) {
        firstName
        lastName
      }
    }
    token
  }
}
    `;
export const Oecds = gql`
    query Oecds($first: Int, $skip: Int, $orderBy: String, $query: OecdsQueryInput, $languageCode: LanguageCode) {
  oecds(first: $first, skip: $skip, orderBy: $orderBy, query: $query) {
    id
    code
    translation(language: $languageCode) {
      name
    }
  }
}
    `;
export const QrjJournals = gql`
    query QrjJournals($first: Int, $skip: Int, $orderBy: String, $query: QrjJournalsQueryInput, $languageCode: LanguageCode) {
  qrjJournals(first: $first, skip: $skip, orderBy: $orderBy, query: $query) {
    id
    code
    translation(language: $languageCode) {
      name
      address
    }
  }
}
    `;
export const UpdateQrjPublication = gql`
    mutation UpdateQrjPublication($languageCode: LanguageCode, $input: QrjPublicationUpdateInput) {
  updateQrjPublication(input: $input) {
    id
    edited
    index
    translation(language: $languageCode) {
      title
      abstract
    }
  }
}
    `;
export const CreateQrjPublication = gql`
    mutation CreateQrjPublication($languageCode: LanguageCode, $input: QrjPublicationCreateInput) {
  createQrjPublication(input: $input) {
    id
    edited
    index
    translation(language: $languageCode) {
      title
      abstract
    }
  }
}
    `;
export const DeleteQrjPublication = gql`
    mutation DeleteQrjPublication($id: ID) {
  deleteQrjPublication(id: $id) {
    index
  }
}
    `;
export const QrjPublications = gql`
    query QrjPublications($languageCode: LanguageCode, $query: QrjPublicationQueryInput, $first: Int, $skip: Int, $orderBy: String) {
  qrjPublications(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
    id
    edited
    index
    translation(language: $languageCode) {
      title
      abstract
    }
  }
  countQrjPublications(query: $query)
}
    `;
export const QrjPublication = gql`
    query QrjPublication($languageCode: LanguageCode, $id: String) {
  qrjPublication(id: $id) {
    index
    year
    number
    pages
    inputDate
    qrjJournal {
      code
      translation(language: $languageCode) {
        name
        address
      }
    }
    oecd {
      code
      translation(language: $languageCode) {
        name
      }
    }
    translation {
      title
      publicationAuthor
      publicationLang
      abstract
    }
  }
}
    `;
export const ResearchProjects = gql`
    query ResearchProjects($languageCode: LanguageCode, $first: Int, $skip: Int, $query: ResearchProjectQueryInput) {
  researchProjects(query: $query, first: $first, skip: $skip) {
    id
    leaderName
    researchExecutors
    organizationName
    endDate
    translation(language: $languageCode) {
      title
      key {
        name
      }
    }
  }
  countResearchProjects(query: $query)
}
    `;
export const ResearchProject = gql`
    query ResearchProject($languageCode: LanguageCode, $id: String) {
  researchProject(id: $id) {
    inpDate
    regDate
    startDate
    endDate
    regNumb
    research
    researchDirection
    researchExecutionBasis
    abstract
    annotation
    budget
    organizationName
    organizationShortName
    organizationCode
    organizationHead
    organizationCity
    organizationAddress
    organizationIndex
    organizationTel
    organizationWeb
    participatingInstitutionName
    participatingInstitutionCountryCity
    participatingInstitutionTel
    participatingInstitutionEmail
    participatingInstitutionWeb
    leaderName
    leaderPosition
    leaderAcademicDegree
    leaderTel
    leaderMobile
    leaderEmail
    researchExecutors
    financing
    note
    pincode
    translation(language: $languageCode) {
      title
      key {
        name
      }
    }
    oecds {
      code
      translation(language: $languageCode) {
        name
      }
    }
  }
}
    `;
export const Experts = gql`
    query Experts($languageCode: LanguageCode, $query: expertQueryInput, $first: Int, $skip: Int) {
  experts(query: $query, first: $first, skip: $skip) {
    id
    translation(language: $languageCode) {
      fullName
      specialization
    }
    inpDate
    oecds {
      translation(language: $languageCode) {
        name
      }
    }
  }
  countExperts(query: $query)
}
    `;
export const Expert = gql`
    query Expert($languageCode: LanguageCode, $id: String) {
  expert(id: $id) {
    email
    publications
    workExperience
    languages {
      name
    }
    translation(language: $languageCode) {
      fullName
      qualification
      academicDegree
      specialization
      workingPlace
      position
    }
    oecds {
      translation(language: $languageCode) {
        name
      }
    }
  }
}
    `;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    