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
  id?: Maybe<Scalars['ID']>;
  pubNumber?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<Maybe<QrjTranslation>>>;
};


export type JournalTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type JournalInput = {
  id?: Maybe<Scalars['ID']>;
  pub_num?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<QrjTranslationInput>>;
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
  input?: Maybe<QrjJournalCreateInput>;
};


export type MutationUpdateQrjJournalArgs = {
  input?: Maybe<QrjJournalUpdateInput>;
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
  input?: Maybe<NewsCreateInput>;
};


export type MutationUpdateNewsArgs = {
  input?: Maybe<NewsUpdateInput>;
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
  id?: Maybe<Scalars['ID']>;
  translation?: Maybe<Array<Maybe<NewsTranslation>>>;
};


export type NewsTranslationArgs = {
  language?: Maybe<LanguageCode>;
};

export type NewsCreateInput = {
  translation?: Maybe<Array<Maybe<NewsTranslationInput>>>;
};

export type NewsQueryInput = {
  translation?: Maybe<NewsTranslationInput>;
};

export type NewsTranslation = {
   __typename?: 'NewsTranslation';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type NewsTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type NewsUpdateInput = {
  id: Scalars['ID'];
  translation?: Maybe<Array<Maybe<NewsTranslationInput>>>;
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

export type QrjJournalCreateInput = {
  code?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<QrjJournalTranslationInput>>;
};

export type QrjJournalQueryInput = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type QrjJournalTranslation = {
   __typename?: 'QrjJournalTranslation';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type QrjJournalTranslationInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type QrjJournalUpdateInput = {
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  translation?: Maybe<Array<QrjJournalTranslationInput>>;
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
  doiUrl?: Maybe<Scalars['String']>;
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
  doiUrl?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  publicationAuthor?: Maybe<Scalars['String']>;
  publicationLang?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
};

export type QrjPublicationTranslationInput = {
  id?: Maybe<Scalars['ID']>;
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
  doiUrl?: Maybe<Scalars['String']>;
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
  countResearchProjects?: Maybe<Scalars['Int']>;
  researchProjects: Array<ResearchProject>;
  researchProject: ResearchProject;
};


export type QueryMeArgs = {
  language?: Maybe<LanguageCode>;
};


export type QueryCountQrjJournalsArgs = {
  query?: Maybe<QrjJournalQueryInput>;
};


export type QueryQrjJournalsArgs = {
  query?: Maybe<QrjJournalQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryQrjJournalArgs = {
  id?: Maybe<Scalars['ID']>;
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
  id?: Maybe<Scalars['ID']>;
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
  id?: Maybe<Scalars['ID']>;
};


export type QueryTechnologyTransferAndInnovationOrganizationsArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTechnologyTransferAndInnovationOrganizationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryTechnologyTransferNetworksArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryTechnologyTransferNetworkArgs = {
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
  id?: Maybe<Scalars['ID']>;
};


export type QueryCountNewsesArgs = {
  query?: Maybe<NewsQueryInput>;
};


export type QueryNewsesArgs = {
  query?: Maybe<NewsQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryNewsArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryQrjsArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryQrjArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryCountResearchProjectsArgs = {
  query?: Maybe<ResearchProjectQueryInput>;
};


export type QueryResearchProjectsArgs = {
  language?: Maybe<LanguageCode>;
  query?: Maybe<ResearchProjectQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryResearchProjectArgs = {
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageCode>;
};

export type ResearchProject = {
   __typename?: 'ResearchProject';
  id?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['String']>;
  eWords?: Maybe<Scalars['String']>;
  final?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  fromYear?: Maybe<Scalars['String']>;
  inp_tarigi?: Maybe<Scalars['String']>;
  reg_tarigi?: Maybe<Scalars['String']>;
  reg_numb?: Maybe<Scalars['String']>;
  geo_dasaxeleba?: Maybe<Scalars['String']>;
  eng_dasaxeleba?: Maybe<Scalars['String']>;
  kvleva?: Maybe<Scalars['String']>;
  kvlev_mimart?: Maybe<Scalars['String']>;
  kvlev_mimart_kodi?: Maybe<Scalars['String']>;
  kvlev_mimart_kodi2?: Maybe<Scalars['String']>;
  kvlev_mimart_kodi3?: Maybe<Scalars['String']>;
  geo_key?: Maybe<Scalars['String']>;
  eng_key?: Maybe<Scalars['String']>;
  safudz?: Maybe<Scalars['String']>;
  referati?: Maybe<Scalars['String']>;
  anotaciaeng?: Maybe<Scalars['String']>;
  start_samushao_tarigi?: Maybe<Scalars['String']>;
  end_samushao_tarigi?: Maybe<Scalars['String']>;
  biujeti?: Maybe<Scalars['String']>;
  org_dasaxeleba?: Maybe<Scalars['String']>;
  org_short_dasaxeleba?: Maybe<Scalars['String']>;
  org_kodi?: Maybe<Scalars['String']>;
  org_ufrosi?: Maybe<Scalars['String']>;
  org_qalaqi?: Maybe<Scalars['String']>;
  org_misamarti?: Maybe<Scalars['String']>;
  org_indexi?: Maybe<Scalars['String']>;
  org_telefoni?: Maybe<Scalars['String']>;
  org_webi?: Maybe<Scalars['String']>;
  tan_dasaxeleba?: Maybe<Scalars['String']>;
  tan_qvekana_qalaqi?: Maybe<Scalars['String']>;
  tan_telefoni?: Maybe<Scalars['String']>;
  tan_email?: Maybe<Scalars['String']>;
  tan_webi?: Maybe<Scalars['String']>;
  xel_gvari_saxeli?: Maybe<Scalars['String']>;
  xel_tanamdeboba?: Maybe<Scalars['String']>;
  xel_xarisxi?: Maybe<Scalars['String']>;
  xel_bin_telefoni?: Maybe<Scalars['String']>;
  xel_sam_telefoni?: Maybe<Scalars['String']>;
  xel_email?: Maybe<Scalars['String']>;
  shemsruleblebis?: Maybe<Scalars['String']>;
  financing?: Maybe<Scalars['String']>;
  shenishvna?: Maybe<Scalars['String']>;
  PINCODE?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  oecd1?: Maybe<Scalars['String']>;
  oecd2?: Maybe<Scalars['String']>;
  oecd3?: Maybe<Scalars['String']>;
  org_dasaxeleba_eng?: Maybe<Scalars['String']>;
  org_short_dasaxeleba_eng?: Maybe<Scalars['String']>;
  org_email?: Maybe<Scalars['String']>;
  xel_gvari_saxeli_eng?: Maybe<Scalars['String']>;
};

export type ResearchProjectQueryInput = {
  eTitle?: Maybe<Scalars['String']>;
  eAuthor?: Maybe<Scalars['String']>;
  eWords?: Maybe<Scalars['String']>;
  eOrganization?: Maybe<Scalars['String']>;
  eCodes?: Maybe<Scalars['String']>;
  fromYear?: Maybe<Scalars['String']>;
  toYear?: Maybe<Scalars['String']>;
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

export type UpdateNewsMutationVariables = {
  languageCode?: Maybe<LanguageCode>;
  input?: Maybe<NewsUpdateInput>;
};


export type UpdateNewsMutation = (
  { __typename?: 'Mutation' }
  & { updateNews?: Maybe<(
    { __typename?: 'News' }
    & Pick<News, 'id'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'NewsTranslation' }
      & Pick<NewsTranslation, 'title' | 'description' | 'content'>
    )>>> }
  )> }
);

export type CreateNewsMutationVariables = {
  languageCode?: Maybe<LanguageCode>;
  input?: Maybe<NewsCreateInput>;
};


export type CreateNewsMutation = (
  { __typename?: 'Mutation' }
  & { createNews?: Maybe<(
    { __typename?: 'News' }
    & Pick<News, 'id'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'NewsTranslation' }
      & Pick<NewsTranslation, 'title' | 'description' | 'content'>
    )>>> }
  )> }
);

export type DeleteNewsMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeleteNewsMutation = (
  { __typename?: 'Mutation' }
  & { deleteNews?: Maybe<(
    { __typename?: 'News' }
    & Pick<News, 'id'>
  )> }
);

export type NewsesQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  query?: Maybe<NewsQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type NewsesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'countNewses'>
  & { newses: Array<(
    { __typename?: 'News' }
    & Pick<News, 'id'>
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'NewsTranslation' }
      & Pick<NewsTranslation, 'title' | 'description' | 'content'>
    )>>> }
  )> }
);

export type NewsQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type NewsQuery = (
  { __typename?: 'Query' }
  & { news: (
    { __typename?: 'News' }
    & { translation?: Maybe<Array<Maybe<(
      { __typename?: 'NewsTranslation' }
      & Pick<NewsTranslation, 'id' | 'title' | 'description' | 'content'>
    )>>> }
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

export type UpdateQrjJournalMutationVariables = {
  languageCode?: Maybe<LanguageCode>;
  input?: Maybe<QrjJournalUpdateInput>;
};


export type UpdateQrjJournalMutation = (
  { __typename?: 'Mutation' }
  & { updateQrjJournal?: Maybe<(
    { __typename?: 'QrjJournal' }
    & Pick<QrjJournal, 'id' | 'code'>
    & { translation: Array<(
      { __typename?: 'QrjJournalTranslation' }
      & Pick<QrjJournalTranslation, 'name' | 'address'>
    )> }
  )> }
);

export type CreateQrjJournalMutationVariables = {
  languageCode?: Maybe<LanguageCode>;
  input?: Maybe<QrjJournalCreateInput>;
};


export type CreateQrjJournalMutation = (
  { __typename?: 'Mutation' }
  & { createQrjJournal?: Maybe<(
    { __typename?: 'QrjJournal' }
    & Pick<QrjJournal, 'id' | 'code'>
    & { translation: Array<(
      { __typename?: 'QrjJournalTranslation' }
      & Pick<QrjJournalTranslation, 'name' | 'address'>
    )> }
  )> }
);

export type DeleteQrjJournalMutationVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type DeleteQrjJournalMutation = (
  { __typename?: 'Mutation' }
  & { deleteQrjJournal?: Maybe<(
    { __typename?: 'QrjJournal' }
    & Pick<QrjJournal, 'id'>
  )> }
);

export type QrjJournalsQueryVariables = {
  languageCode?: Maybe<LanguageCode>;
  query?: Maybe<QrjJournalQueryInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QrjJournalsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'countQrjJournals'>
  & { qrjJournals: Array<(
    { __typename?: 'QrjJournal' }
    & Pick<QrjJournal, 'id' | 'code'>
    & { translation: Array<(
      { __typename?: 'QrjJournalTranslation' }
      & Pick<QrjJournalTranslation, 'id' | 'name' | 'address'>
    )> }
  )> }
);

export type QrjJournalQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type QrjJournalQuery = (
  { __typename?: 'Query' }
  & { qrjJournal: (
    { __typename?: 'QrjJournal' }
    & Pick<QrjJournal, 'id' | 'code'>
    & { translation: Array<(
      { __typename?: 'QrjJournalTranslation' }
      & Pick<QrjJournalTranslation, 'id' | 'name' | 'address'>
    )> }
  ) }
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
  id?: Maybe<Scalars['ID']>;
};


export type QrjPublicationQuery = (
  { __typename?: 'Query' }
  & { qrjPublication: (
    { __typename?: 'QrjPublication' }
    & Pick<QrjPublication, 'index' | 'year' | 'number' | 'pages' | 'inputDate' | 'doiUrl'>
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
      & Pick<QrjPublicationTranslation, 'id' | 'title' | 'publicationAuthor' | 'publicationLang' | 'abstract'>
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
  id?: Maybe<Scalars['ID']>;
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
export const UpdateNewsDocument = gql`
    mutation UpdateNews($languageCode: LanguageCode, $input: NewsUpdateInput) {
  updateNews(input: $input) {
    id
    translation(language: $languageCode) {
      title
      description
      content
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateNewsGQL extends Apollo.Mutation<UpdateNewsMutation, UpdateNewsMutationVariables> {
    document = UpdateNewsDocument;
    
  }
export const CreateNewsDocument = gql`
    mutation CreateNews($languageCode: LanguageCode, $input: NewsCreateInput) {
  createNews(input: $input) {
    id
    translation(language: $languageCode) {
      title
      description
      content
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNewsGQL extends Apollo.Mutation<CreateNewsMutation, CreateNewsMutationVariables> {
    document = CreateNewsDocument;
    
  }
export const DeleteNewsDocument = gql`
    mutation DeleteNews($id: ID) {
  deleteNews(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNewsGQL extends Apollo.Mutation<DeleteNewsMutation, DeleteNewsMutationVariables> {
    document = DeleteNewsDocument;
    
  }
export const NewsesDocument = gql`
    query Newses($languageCode: LanguageCode, $query: NewsQueryInput, $first: Int, $skip: Int, $orderBy: String) {
  newses(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
    id
    translation(language: $languageCode) {
      title
      description
      content
    }
  }
  countNewses(query: $query)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewsesGQL extends Apollo.Query<NewsesQuery, NewsesQueryVariables> {
    document = NewsesDocument;
    
  }
export const NewsDocument = gql`
    query News($id: ID) {
  news(id: $id) {
    translation {
      id
      title
      description
      content
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewsGQL extends Apollo.Query<NewsQuery, NewsQueryVariables> {
    document = NewsDocument;
    
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
export const UpdateQrjJournalDocument = gql`
    mutation UpdateQrjJournal($languageCode: LanguageCode, $input: QrjJournalUpdateInput) {
  updateQrjJournal(input: $input) {
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
  export class UpdateQrjJournalGQL extends Apollo.Mutation<UpdateQrjJournalMutation, UpdateQrjJournalMutationVariables> {
    document = UpdateQrjJournalDocument;
    
  }
export const CreateQrjJournalDocument = gql`
    mutation CreateQrjJournal($languageCode: LanguageCode, $input: QrjJournalCreateInput) {
  createQrjJournal(input: $input) {
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
  export class CreateQrjJournalGQL extends Apollo.Mutation<CreateQrjJournalMutation, CreateQrjJournalMutationVariables> {
    document = CreateQrjJournalDocument;
    
  }
export const DeleteQrjJournalDocument = gql`
    mutation DeleteQrjJournal($id: ID) {
  deleteQrjJournal(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteQrjJournalGQL extends Apollo.Mutation<DeleteQrjJournalMutation, DeleteQrjJournalMutationVariables> {
    document = DeleteQrjJournalDocument;
    
  }
export const QrjJournalsDocument = gql`
    query QrjJournals($languageCode: LanguageCode, $query: QrjJournalQueryInput, $first: Int, $skip: Int, $orderBy: String) {
  qrjJournals(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
    id
    code
    translation(language: $languageCode) {
      id
      name
      address
    }
  }
  countQrjJournals(query: $query)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QrjJournalsGQL extends Apollo.Query<QrjJournalsQuery, QrjJournalsQueryVariables> {
    document = QrjJournalsDocument;
    
  }
export const QrjJournalDocument = gql`
    query QrjJournal($id: ID) {
  qrjJournal(id: $id) {
    id
    code
    translation {
      id
      name
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QrjJournalGQL extends Apollo.Query<QrjJournalQuery, QrjJournalQueryVariables> {
    document = QrjJournalDocument;
    
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
    query QrjPublication($languageCode: LanguageCode, $id: ID) {
  qrjPublication(id: $id) {
    index
    year
    number
    pages
    inputDate
    doiUrl
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
      id
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
    query Expert($languageCode: LanguageCode, $id: ID) {
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
export const UpdateNews = gql`
    mutation UpdateNews($languageCode: LanguageCode, $input: NewsUpdateInput) {
  updateNews(input: $input) {
    id
    translation(language: $languageCode) {
      title
      description
      content
    }
  }
}
    `;
export const CreateNews = gql`
    mutation CreateNews($languageCode: LanguageCode, $input: NewsCreateInput) {
  createNews(input: $input) {
    id
    translation(language: $languageCode) {
      title
      description
      content
    }
  }
}
    `;
export const DeleteNews = gql`
    mutation DeleteNews($id: ID) {
  deleteNews(id: $id) {
    id
  }
}
    `;
export const Newses = gql`
    query Newses($languageCode: LanguageCode, $query: NewsQueryInput, $first: Int, $skip: Int, $orderBy: String) {
  newses(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
    id
    translation(language: $languageCode) {
      title
      description
      content
    }
  }
  countNewses(query: $query)
}
    `;
export const News = gql`
    query News($id: ID) {
  news(id: $id) {
    translation {
      id
      title
      description
      content
    }
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
export const UpdateQrjJournal = gql`
    mutation UpdateQrjJournal($languageCode: LanguageCode, $input: QrjJournalUpdateInput) {
  updateQrjJournal(input: $input) {
    id
    code
    translation(language: $languageCode) {
      name
      address
    }
  }
}
    `;
export const CreateQrjJournal = gql`
    mutation CreateQrjJournal($languageCode: LanguageCode, $input: QrjJournalCreateInput) {
  createQrjJournal(input: $input) {
    id
    code
    translation(language: $languageCode) {
      name
      address
    }
  }
}
    `;
export const DeleteQrjJournal = gql`
    mutation DeleteQrjJournal($id: ID) {
  deleteQrjJournal(id: $id) {
    id
  }
}
    `;
export const QrjJournals = gql`
    query QrjJournals($languageCode: LanguageCode, $query: QrjJournalQueryInput, $first: Int, $skip: Int, $orderBy: String) {
  qrjJournals(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
    id
    code
    translation(language: $languageCode) {
      id
      name
      address
    }
  }
  countQrjJournals(query: $query)
}
    `;
export const QrjJournal = gql`
    query QrjJournal($id: ID) {
  qrjJournal(id: $id) {
    id
    code
    translation {
      id
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
    query QrjPublication($languageCode: LanguageCode, $id: ID) {
  qrjPublication(id: $id) {
    index
    year
    number
    pages
    inputDate
    doiUrl
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
      id
      title
      publicationAuthor
      publicationLang
      abstract
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
    query Expert($languageCode: LanguageCode, $id: ID) {
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
    