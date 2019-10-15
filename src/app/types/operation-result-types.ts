

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateExpertMutation
// ====================================================

export interface UpdateExpertMutation_updateExpert_translation {
  fullName: string | null;
  qualification: string | null;
  academicDegree: string | null;
  specialization: string | null;
  workingPlace: string | null;
  position: string | null;
}

export interface UpdateExpertMutation_updateExpert_oecds {
  code: string | null;
}

export interface UpdateExpertMutation_updateExpert_languages {
  code: LanguageCode | null;
}

export interface UpdateExpertMutation_updateExpert {
  id: string;
  inpDate: string | null;
  email: string | null;
  web: string | null;
  tel: string | null;
  mobile: string | null;
  publications: string | null;
  translation: (UpdateExpertMutation_updateExpert_translation | null)[] | null;
  oecds: (UpdateExpertMutation_updateExpert_oecds | null)[] | null;
  languages: (UpdateExpertMutation_updateExpert_languages | null)[] | null;
}

export interface UpdateExpertMutation {
  updateExpert: UpdateExpertMutation_updateExpert | null;
}

export interface UpdateExpertMutationVariables {
  id: string;
  inpDate?: string | null;
  email?: string | null;
  web?: string | null;
  tel?: string | null;
  mobile?: string | null;
  publications?: string | null;
  translation?: (ExpertTranslationInput | null)[] | null;
  oecds?: (OecdInput | null)[] | null;
  languages?: (LanguageInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateExpertMutation
// ====================================================

export interface CreateExpertMutation_createExpert_translation {
  fullName: string | null;
  qualification: string | null;
  academicDegree: string | null;
  specialization: string | null;
  workingPlace: string | null;
  position: string | null;
}

export interface CreateExpertMutation_createExpert_oecds {
  code: string | null;
}

export interface CreateExpertMutation_createExpert_languages {
  code: LanguageCode | null;
}

export interface CreateExpertMutation_createExpert {
  id: string;
  inpDate: string | null;
  email: string | null;
  web: string | null;
  tel: string | null;
  mobile: string | null;
  publications: string | null;
  translation: (CreateExpertMutation_createExpert_translation | null)[] | null;
  oecds: (CreateExpertMutation_createExpert_oecds | null)[] | null;
  languages: (CreateExpertMutation_createExpert_languages | null)[] | null;
}

export interface CreateExpertMutation {
  createExpert: CreateExpertMutation_createExpert | null;
}

export interface CreateExpertMutationVariables {
  inpDate?: string | null;
  email?: string | null;
  web?: string | null;
  tel?: string | null;
  mobile?: string | null;
  publications?: string | null;
  translation?: (ExpertTranslationInput | null)[] | null;
  oecds?: (OecdInput | null)[] | null;
  languages?: (LanguageInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteExpertMutation
// ====================================================

export interface DeleteExpertMutation_deleteExpert {
  id: string;
}

export interface DeleteExpertMutation {
  deleteExpert: DeleteExpertMutation_deleteExpert | null;
}

export interface DeleteExpertMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountExpertsQuery
// ====================================================

export interface CountExpertsQuery {
  countExperts: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExpertQuery
// ====================================================

export interface ExpertQuery_expert_translation {
  fullName: string | null;
  qualification: string | null;
  academicDegree: string | null;
  specialization: string | null;
  workingPlace: string | null;
  position: string | null;
}

export interface ExpertQuery_expert_oecds {
  code: string | null;
}

export interface ExpertQuery_expert_languages {
  code: LanguageCode | null;
}

export interface ExpertQuery_expert {
  id: string;
  inpDate: string | null;
  email: string | null;
  web: string | null;
  tel: string | null;
  mobile: string | null;
  publications: string | null;
  translation: (ExpertQuery_expert_translation | null)[] | null;
  oecds: (ExpertQuery_expert_oecds | null)[] | null;
  languages: (ExpertQuery_expert_languages | null)[] | null;
}

export interface ExpertQuery {
  expert: ExpertQuery_expert;
}

export interface ExpertQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExpertsQuery
// ====================================================

export interface ExpertsQuery_experts_translation {
  fullName: string | null;
  qualification: string | null;
  academicDegree: string | null;
  specialization: string | null;
  workingPlace: string | null;
  position: string | null;
}

export interface ExpertsQuery_experts_oecds {
  code: string | null;
}

export interface ExpertsQuery_experts_languages {
  code: LanguageCode | null;
}

export interface ExpertsQuery_experts {
  id: string;
  inpDate: string | null;
  email: string | null;
  web: string | null;
  tel: string | null;
  mobile: string | null;
  publications: string | null;
  translation: (ExpertsQuery_experts_translation | null)[] | null;
  oecds: (ExpertsQuery_experts_oecds | null)[] | null;
  languages: (ExpertsQuery_experts_languages | null)[] | null;
}

export interface ExpertsQuery {
  experts: ExpertsQuery_experts[];
}

export interface ExpertsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateOecdMutation
// ====================================================

export interface UpdateOecdMutation_updateOecd_translation {
  name: string | null;
}

export interface UpdateOecdMutation_updateOecd {
  id: string;
  code: string | null;
  translation: (UpdateOecdMutation_updateOecd_translation | null)[] | null;
}

export interface UpdateOecdMutation {
  updateOecd: UpdateOecdMutation_updateOecd | null;
}

export interface UpdateOecdMutationVariables {
  id: string;
  code?: string | null;
  name?: string | null;
  nameEng?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateOecdMutation
// ====================================================

export interface CreateOecdMutation_createOecd_translation {
  name: string | null;
}

export interface CreateOecdMutation_createOecd {
  id: string;
  code: string | null;
  translation: (CreateOecdMutation_createOecd_translation | null)[] | null;
}

export interface CreateOecdMutation {
  createOecd: CreateOecdMutation_createOecd | null;
}

export interface CreateOecdMutationVariables {
  code?: string | null;
  name?: string | null;
  nameEng?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteOecdMutation
// ====================================================

export interface DeleteOecdMutation_deleteOecd {
  code: string | null;
}

export interface DeleteOecdMutation {
  deleteOecd: DeleteOecdMutation_deleteOecd | null;
}

export interface DeleteOecdMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountOecdsQuery
// ====================================================

export interface CountOecdsQuery {
  countOecds: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OecdQuery
// ====================================================

export interface OecdQuery_oecd_translation {
  name: string | null;
}

export interface OecdQuery_oecd {
  id: string;
  code: string | null;
  translation: (OecdQuery_oecd_translation | null)[] | null;
}

export interface OecdQuery {
  oecd: OecdQuery_oecd;
}

export interface OecdQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OecdsQuery
// ====================================================

export interface OecdsQuery_oecds_translation {
  name: string | null;
}

export interface OecdsQuery_oecds {
  id: string;
  code: string | null;
  translation: (OecdsQuery_oecds_translation | null)[] | null;
}

export interface OecdsQuery {
  oecds: OecdsQuery_oecds[];
}

export interface OecdsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountQrjJournalsQuery
// ====================================================

export interface CountQrjJournalsQuery {
  countQrjJournals: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjJournalQuery
// ====================================================

export interface QrjJournalQuery_qrjJournal_translation {
  name: string | null;
  address: string | null;
}

export interface QrjJournalQuery_qrjJournal {
  id: string;
  code: string | null;
  translation: (QrjJournalQuery_qrjJournal_translation | null)[] | null;
}

export interface QrjJournalQuery {
  qrjJournal: QrjJournalQuery_qrjJournal;
}

export interface QrjJournalQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjJournalsQuery
// ====================================================

export interface QrjJournalsQuery_qrjJournals_translation {
  name: string | null;
  address: string | null;
}

export interface QrjJournalsQuery_qrjJournals {
  id: string;
  code: string | null;
  translation: (QrjJournalsQuery_qrjJournals_translation | null)[] | null;
}

export interface QrjJournalsQuery {
  qrjJournals: QrjJournalsQuery_qrjJournals[];
}

export interface QrjJournalsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateQrjJournalMutation
// ====================================================

export interface UpdateQrjJournalMutation_updateQrjJournal_translation {
  name: string | null;
  address: string | null;
}

export interface UpdateQrjJournalMutation_updateQrjJournal {
  id: string;
  code: string | null;
  translation: (UpdateQrjJournalMutation_updateQrjJournal_translation | null)[] | null;
}

export interface UpdateQrjJournalMutation {
  updateQrjJournal: UpdateQrjJournalMutation_updateQrjJournal | null;
}

export interface UpdateQrjJournalMutationVariables {
  id: string;
  code?: string | null;
  name?: string | null;
  address?: string | null;
  nameEng?: string | null;
  addressEng?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateQrjJournalMutation
// ====================================================

export interface CreateQrjJournalMutation_createQrjJournal_translation {
  name: string | null;
  address: string | null;
}

export interface CreateQrjJournalMutation_createQrjJournal {
  id: string;
  code: string | null;
  translation: (CreateQrjJournalMutation_createQrjJournal_translation | null)[] | null;
}

export interface CreateQrjJournalMutation {
  createQrjJournal: CreateQrjJournalMutation_createQrjJournal | null;
}

export interface CreateQrjJournalMutationVariables {
  code?: string | null;
  name?: string | null;
  address?: string | null;
  nameEng?: string | null;
  addressEng?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteQrjJournalMutation
// ====================================================

export interface DeleteQrjJournalMutation_deleteQrjJournal {
  code: string | null;
}

export interface DeleteQrjJournalMutation {
  deleteQrjJournal: DeleteQrjJournalMutation_deleteQrjJournal | null;
}

export interface DeleteQrjJournalMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateQrjPublicationMutation
// ====================================================

export interface UpdateQrjPublicationMutation_updateQrjPublication_journal_translation {
  name: string | null;
}

export interface UpdateQrjPublicationMutation_updateQrjPublication_journal {
  code: string | null;
  translation: (UpdateQrjPublicationMutation_updateQrjPublication_journal_translation | null)[] | null;
}

export interface UpdateQrjPublicationMutation_updateQrjPublication_oecd_translation {
  name: string | null;
}

export interface UpdateQrjPublicationMutation_updateQrjPublication_oecd {
  code: string | null;
  translation: (UpdateQrjPublicationMutation_updateQrjPublication_oecd_translation | null)[] | null;
}

export interface UpdateQrjPublicationMutation_updateQrjPublication_translation {
  title: string | null;
  publicationAuthor: string | null;
  publicationLang: string | null;
  abstract: string | null;
}

export interface UpdateQrjPublicationMutation_updateQrjPublication {
  id: string;
  index: string | null;
  year: string | null;
  number: string | null;
  pages: string | null;
  inputDate: string | null;
  journal: UpdateQrjPublicationMutation_updateQrjPublication_journal | null;
  oecd: UpdateQrjPublicationMutation_updateQrjPublication_oecd | null;
  translation: (UpdateQrjPublicationMutation_updateQrjPublication_translation | null)[] | null;
}

export interface UpdateQrjPublicationMutation {
  updateQrjPublication: UpdateQrjPublicationMutation_updateQrjPublication | null;
}

export interface UpdateQrjPublicationMutationVariables {
  id: string;
  index?: string | null;
  year?: string | null;
  number?: string | null;
  pages?: string | null;
  oecd?: string | null;
  journal?: string | null;
  title?: string | null;
  publicationAuthor?: string | null;
  publicationLang?: string | null;
  abstract?: string | null;
  titleEng?: string | null;
  publicationAuthorEng?: string | null;
  publicationLangEng?: string | null;
  abstractEng?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateQrjPublicationMutation
// ====================================================

export interface CreateQrjPublicationMutation_createQrjPublication_journal_translation {
  name: string | null;
}

export interface CreateQrjPublicationMutation_createQrjPublication_journal {
  code: string | null;
  translation: (CreateQrjPublicationMutation_createQrjPublication_journal_translation | null)[] | null;
}

export interface CreateQrjPublicationMutation_createQrjPublication_oecd_translation {
  name: string | null;
}

export interface CreateQrjPublicationMutation_createQrjPublication_oecd {
  code: string | null;
  translation: (CreateQrjPublicationMutation_createQrjPublication_oecd_translation | null)[] | null;
}

export interface CreateQrjPublicationMutation_createQrjPublication_translation {
  title: string | null;
  publicationAuthor: string | null;
  publicationLang: string | null;
  abstract: string | null;
}

export interface CreateQrjPublicationMutation_createQrjPublication {
  id: string;
  index: string | null;
  year: string | null;
  number: string | null;
  pages: string | null;
  inputDate: string | null;
  journal: CreateQrjPublicationMutation_createQrjPublication_journal | null;
  oecd: CreateQrjPublicationMutation_createQrjPublication_oecd | null;
  translation: (CreateQrjPublicationMutation_createQrjPublication_translation | null)[] | null;
}

export interface CreateQrjPublicationMutation {
  createQrjPublication: CreateQrjPublicationMutation_createQrjPublication | null;
}

export interface CreateQrjPublicationMutationVariables {
  index?: string | null;
  year?: string | null;
  number?: string | null;
  pages?: string | null;
  oecd?: string | null;
  journal?: string | null;
  title?: string | null;
  publicationAuthor?: string | null;
  publicationLang?: string | null;
  abstract?: string | null;
  titleEng?: string | null;
  publicationAuthorEng?: string | null;
  publicationLangEng?: string | null;
  abstractEng?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteQrjPublicationMutation
// ====================================================

export interface DeleteQrjPublicationMutation_deleteQrjPublication {
  index: string | null;
}

export interface DeleteQrjPublicationMutation {
  deleteQrjPublication: DeleteQrjPublicationMutation_deleteQrjPublication | null;
}

export interface DeleteQrjPublicationMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountQrjPublicationsQuery
// ====================================================

export interface CountQrjPublicationsQuery {
  countQrjPublications: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjPublicationQuery
// ====================================================

export interface QrjPublicationQuery_qrjPublication_journal_translation {
  name: string | null;
}

export interface QrjPublicationQuery_qrjPublication_journal {
  code: string | null;
  translation: (QrjPublicationQuery_qrjPublication_journal_translation | null)[] | null;
}

export interface QrjPublicationQuery_qrjPublication_oecd_translation {
  name: string | null;
}

export interface QrjPublicationQuery_qrjPublication_oecd {
  code: string | null;
  translation: (QrjPublicationQuery_qrjPublication_oecd_translation | null)[] | null;
}

export interface QrjPublicationQuery_qrjPublication_translation {
  title: string | null;
  publicationAuthor: string | null;
  publicationLang: string | null;
  abstract: string | null;
}

export interface QrjPublicationQuery_qrjPublication {
  id: string;
  index: string | null;
  year: string | null;
  number: string | null;
  pages: string | null;
  inputDate: string | null;
  journal: QrjPublicationQuery_qrjPublication_journal | null;
  oecd: QrjPublicationQuery_qrjPublication_oecd | null;
  translation: (QrjPublicationQuery_qrjPublication_translation | null)[] | null;
}

export interface QrjPublicationQuery {
  qrjPublication: QrjPublicationQuery_qrjPublication;
}

export interface QrjPublicationQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjPublicationsQuery
// ====================================================

export interface QrjPublicationsQuery_qrjPublications_journal_translation {
  name: string | null;
}

export interface QrjPublicationsQuery_qrjPublications_journal {
  code: string | null;
  translation: (QrjPublicationsQuery_qrjPublications_journal_translation | null)[] | null;
}

export interface QrjPublicationsQuery_qrjPublications_oecd_translation {
  name: string | null;
}

export interface QrjPublicationsQuery_qrjPublications_oecd {
  code: string | null;
  translation: (QrjPublicationsQuery_qrjPublications_oecd_translation | null)[] | null;
}

export interface QrjPublicationsQuery_qrjPublications_translation {
  title: string | null;
  publicationAuthor: string | null;
  publicationLang: string | null;
  abstract: string | null;
}

export interface QrjPublicationsQuery_qrjPublications {
  id: string;
  index: string | null;
  year: string | null;
  number: string | null;
  pages: string | null;
  inputDate: string | null;
  journal: QrjPublicationsQuery_qrjPublications_journal | null;
  oecd: QrjPublicationsQuery_qrjPublications_oecd | null;
  translation: (QrjPublicationsQuery_qrjPublications_translation | null)[] | null;
}

export interface QrjPublicationsQuery {
  qrjPublications: QrjPublicationsQuery_qrjPublications[];
}

export interface QrjPublicationsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateQrjMutation
// ====================================================

export interface UpdateQrjMutation_updateQrj_journal_translation {
  address: string | null;
}

export interface UpdateQrjMutation_updateQrj_journal {
  pubNumber: string | null;
  translation: (UpdateQrjMutation_updateQrj_journal_translation | null)[] | null;
}

export interface UpdateQrjMutation_updateQrj {
  id: string;
  year: string | null;
  journal: (UpdateQrjMutation_updateQrj_journal | null)[] | null;
}

export interface UpdateQrjMutation {
  updateQrj: UpdateQrjMutation_updateQrj | null;
}

export interface UpdateQrjMutationVariables {
  id: string;
  year?: string | null;
  pub_num1?: string | null;
  pub_num1_address_ka?: string | null;
  pub_num1_address_en?: string | null;
  pub_num2?: string | null;
  pub_num2_address_ka?: string | null;
  pub_num2_address_en?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateQrjMutation
// ====================================================

export interface CreateQrjMutation_createQrj_journal_translation {
  address: string | null;
}

export interface CreateQrjMutation_createQrj_journal {
  pubNumber: string | null;
  translation: (CreateQrjMutation_createQrj_journal_translation | null)[] | null;
}

export interface CreateQrjMutation_createQrj {
  id: string;
  year: string | null;
  journal: (CreateQrjMutation_createQrj_journal | null)[] | null;
}

export interface CreateQrjMutation {
  createQrj: CreateQrjMutation_createQrj | null;
}

export interface CreateQrjMutationVariables {
  year?: string | null;
  journal?: (JournalInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteQrjMutation
// ====================================================

export interface DeleteQrjMutation_deleteQrj {
  id: string;
}

export interface DeleteQrjMutation {
  deleteQrj: DeleteQrjMutation_deleteQrj | null;
}

export interface DeleteQrjMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountQrjsQuery
// ====================================================

export interface CountQrjsQuery {
  countQrjs: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjQuery
// ====================================================

export interface QrjQuery_qrj_journal_translation {
  address: string | null;
}

export interface QrjQuery_qrj_journal {
  pubNumber: string | null;
  translation: (QrjQuery_qrj_journal_translation | null)[] | null;
}

export interface QrjQuery_qrj {
  id: string;
  year: string | null;
  journal: (QrjQuery_qrj_journal | null)[] | null;
}

export interface QrjQuery {
  qrj: QrjQuery_qrj;
}

export interface QrjQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjsQuery
// ====================================================

export interface QrjsQuery_qrjs_journal_translation {
  address: string | null;
}

export interface QrjsQuery_qrjs_journal {
  pubNumber: string | null;
  translation: (QrjsQuery_qrjs_journal_translation | null)[] | null;
}

export interface QrjsQuery_qrjs {
  id: string;
  year: string | null;
  journal: (QrjsQuery_qrjs_journal | null)[] | null;
}

export interface QrjsQuery {
  qrjs: QrjsQuery_qrjs[];
}

export interface QrjsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateResearchProjectMutation
// ====================================================

export interface UpdateResearchProjectMutation_updateResearchProject_translation {
  title: string | null;
  key: (string | null)[] | null;
}

export interface UpdateResearchProjectMutation_updateResearchProject_oecds {
  code: string | null;
}

export interface UpdateResearchProjectMutation_updateResearchProject {
  id: string | null;
  inpDate: string | null;
  regDate: string | null;
  startDate: string | null;
  endDate: string | null;
  regNumb: string | null;
  research: string | null;
  researchDirection: string | null;
  researchExecutionBasis: string | null;
  abstract: string | null;
  annotation: string | null;
  budget: number | null;
  organizationName: string | null;
  organizationShortName: string | null;
  organizationCode: string | null;
  organizationHead: string | null;
  organizationCity: string | null;
  organizationAddress: string | null;
  organizationIndex: string | null;
  organizationTel: string | null;
  organizationWeb: string | null;
  participatingInstitutionName: string | null;
  participatingInstitutionCountryCity: string | null;
  participatingInstitutionTel: string | null;
  participatingInstitutionEmail: string | null;
  participatingInstitutionWeb: string | null;
  leaderName: string | null;
  leaderPosition: string | null;
  leaderAcademicDegree: string | null;
  leaderTel: string | null;
  leaderMobile: string | null;
  leaderEmail: string | null;
  researchExecutors: string | null;
  financing: string | null;
  note: string | null;
  pincode: string | null;
  translation: (UpdateResearchProjectMutation_updateResearchProject_translation | null)[] | null;
  oecds: (UpdateResearchProjectMutation_updateResearchProject_oecds | null)[] | null;
}

export interface UpdateResearchProjectMutation {
  updateResearchProject: UpdateResearchProjectMutation_updateResearchProject | null;
}

export interface UpdateResearchProjectMutationVariables {
  id: string;
  inpDate?: string | null;
  regDate?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  regNumb?: string | null;
  research?: string | null;
  researchDirection?: string | null;
  researchExecutionBasis?: string | null;
  abstract?: string | null;
  annotation?: string | null;
  budget?: number | null;
  organizationName?: string | null;
  organizationShortName?: string | null;
  organizationCode?: string | null;
  organizationHead?: string | null;
  organizationCity?: string | null;
  organizationAddress?: string | null;
  organizationIndex?: string | null;
  organizationTel?: string | null;
  organizationWeb?: string | null;
  participatingInstitutionName?: string | null;
  participatingInstitutionCountryCity?: string | null;
  participatingInstitutionTel?: string | null;
  participatingInstitutionEmail?: string | null;
  participatingInstitutionWeb?: string | null;
  leaderName?: string | null;
  leaderPosition?: string | null;
  leaderAcademicDegree?: string | null;
  leaderTel?: string | null;
  leaderMobile?: string | null;
  leaderEmail?: string | null;
  researchExecutors?: string | null;
  financing?: string | null;
  note?: string | null;
  pincode?: string | null;
  translation?: (ResearchProjectTranslationInput | null)[] | null;
  oecds?: (OecdInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateResearchProjectMutation
// ====================================================

export interface CreateResearchProjectMutation_createResearchProject_translation {
  title: string | null;
  key: (string | null)[] | null;
}

export interface CreateResearchProjectMutation_createResearchProject_oecds {
  code: string | null;
}

export interface CreateResearchProjectMutation_createResearchProject {
  id: string | null;
  inpDate: string | null;
  regDate: string | null;
  startDate: string | null;
  endDate: string | null;
  regNumb: string | null;
  research: string | null;
  researchDirection: string | null;
  researchExecutionBasis: string | null;
  abstract: string | null;
  annotation: string | null;
  budget: number | null;
  organizationName: string | null;
  organizationShortName: string | null;
  organizationCode: string | null;
  organizationHead: string | null;
  organizationCity: string | null;
  organizationAddress: string | null;
  organizationIndex: string | null;
  organizationTel: string | null;
  organizationWeb: string | null;
  participatingInstitutionName: string | null;
  participatingInstitutionCountryCity: string | null;
  participatingInstitutionTel: string | null;
  participatingInstitutionEmail: string | null;
  participatingInstitutionWeb: string | null;
  leaderName: string | null;
  leaderPosition: string | null;
  leaderAcademicDegree: string | null;
  leaderTel: string | null;
  leaderMobile: string | null;
  leaderEmail: string | null;
  researchExecutors: string | null;
  financing: string | null;
  note: string | null;
  pincode: string | null;
  translation: (CreateResearchProjectMutation_createResearchProject_translation | null)[] | null;
  oecds: (CreateResearchProjectMutation_createResearchProject_oecds | null)[] | null;
}

export interface CreateResearchProjectMutation {
  createResearchProject: CreateResearchProjectMutation_createResearchProject | null;
}

export interface CreateResearchProjectMutationVariables {
  inpDate?: string | null;
  regDate?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  regNumb?: string | null;
  research?: string | null;
  researchDirection?: string | null;
  researchExecutionBasis?: string | null;
  abstract?: string | null;
  annotation?: string | null;
  budget?: number | null;
  organizationName?: string | null;
  organizationShortName?: string | null;
  organizationCode?: string | null;
  organizationHead?: string | null;
  organizationCity?: string | null;
  organizationAddress?: string | null;
  organizationIndex?: string | null;
  organizationTel?: string | null;
  organizationWeb?: string | null;
  participatingInstitutionName?: string | null;
  participatingInstitutionCountryCity?: string | null;
  participatingInstitutionTel?: string | null;
  participatingInstitutionEmail?: string | null;
  participatingInstitutionWeb?: string | null;
  leaderName?: string | null;
  leaderPosition?: string | null;
  leaderAcademicDegree?: string | null;
  leaderTel?: string | null;
  leaderMobile?: string | null;
  leaderEmail?: string | null;
  researchExecutors?: string | null;
  financing?: string | null;
  note?: string | null;
  pincode?: string | null;
  translation?: (ResearchProjectTranslationInput | null)[] | null;
  oecds?: (OecdInput | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteResearchProjectMutation
// ====================================================

export interface DeleteResearchProjectMutation_deleteResearchProject {
  id: string | null;
}

export interface DeleteResearchProjectMutation {
  deleteResearchProject: DeleteResearchProjectMutation_deleteResearchProject | null;
}

export interface DeleteResearchProjectMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountResearchProjectsQuery
// ====================================================

export interface CountResearchProjectsQuery {
  countResearchProjects: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResearchProjectQuery
// ====================================================

export interface ResearchProjectQuery_researchProject_translation {
  title: string | null;
  key: (string | null)[] | null;
}

export interface ResearchProjectQuery_researchProject_oecds {
  code: string | null;
}

export interface ResearchProjectQuery_researchProject {
  id: string | null;
  inpDate: string | null;
  regDate: string | null;
  startDate: string | null;
  endDate: string | null;
  regNumb: string | null;
  research: string | null;
  researchDirection: string | null;
  researchExecutionBasis: string | null;
  abstract: string | null;
  annotation: string | null;
  budget: number | null;
  organizationName: string | null;
  organizationShortName: string | null;
  organizationCode: string | null;
  organizationHead: string | null;
  organizationCity: string | null;
  organizationAddress: string | null;
  organizationIndex: string | null;
  organizationTel: string | null;
  organizationWeb: string | null;
  participatingInstitutionName: string | null;
  participatingInstitutionCountryCity: string | null;
  participatingInstitutionTel: string | null;
  participatingInstitutionEmail: string | null;
  participatingInstitutionWeb: string | null;
  leaderName: string | null;
  leaderPosition: string | null;
  leaderAcademicDegree: string | null;
  leaderTel: string | null;
  leaderMobile: string | null;
  leaderEmail: string | null;
  researchExecutors: string | null;
  financing: string | null;
  note: string | null;
  pincode: string | null;
  translation: (ResearchProjectQuery_researchProject_translation | null)[] | null;
  oecds: (ResearchProjectQuery_researchProject_oecds | null)[] | null;
}

export interface ResearchProjectQuery {
  researchProject: ResearchProjectQuery_researchProject;
}

export interface ResearchProjectQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResearchProjectsQuery
// ====================================================

export interface ResearchProjectsQuery_researchProjects_translation {
  title: string | null;
  key: (string | null)[] | null;
}

export interface ResearchProjectsQuery_researchProjects_oecds {
  code: string | null;
}

export interface ResearchProjectsQuery_researchProjects {
  id: string | null;
  inpDate: string | null;
  regDate: string | null;
  startDate: string | null;
  endDate: string | null;
  regNumb: string | null;
  research: string | null;
  researchDirection: string | null;
  researchExecutionBasis: string | null;
  abstract: string | null;
  annotation: string | null;
  budget: number | null;
  organizationName: string | null;
  organizationShortName: string | null;
  organizationCode: string | null;
  organizationHead: string | null;
  organizationCity: string | null;
  organizationAddress: string | null;
  organizationIndex: string | null;
  organizationTel: string | null;
  organizationWeb: string | null;
  participatingInstitutionName: string | null;
  participatingInstitutionCountryCity: string | null;
  participatingInstitutionTel: string | null;
  participatingInstitutionEmail: string | null;
  participatingInstitutionWeb: string | null;
  leaderName: string | null;
  leaderPosition: string | null;
  leaderAcademicDegree: string | null;
  leaderTel: string | null;
  leaderMobile: string | null;
  leaderEmail: string | null;
  researchExecutors: string | null;
  financing: string | null;
  note: string | null;
  pincode: string | null;
  translation: (ResearchProjectsQuery_researchProjects_translation | null)[] | null;
  oecds: (ResearchProjectsQuery_researchProjects_oecds | null)[] | null;
}

export interface ResearchProjectsQuery {
  researchProjects: ResearchProjectsQuery_researchProjects[];
}

export interface ResearchProjectsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTechnologyTransferAndInnovationOrganizationMutation
// ====================================================

export interface UpdateTechnologyTransferAndInnovationOrganizationMutation_updateTechnologyTransferAndInnovationOrganization {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface UpdateTechnologyTransferAndInnovationOrganizationMutation {
  updateTechnologyTransferAndInnovationOrganization: UpdateTechnologyTransferAndInnovationOrganizationMutation_updateTechnologyTransferAndInnovationOrganization | null;
}

export interface UpdateTechnologyTransferAndInnovationOrganizationMutationVariables {
  id: string;
  url?: string | null;
  title?: string | null;
  text?: string | null;
  region?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTechnologyTransferAndInnovationOrganizationMutation
// ====================================================

export interface CreateTechnologyTransferAndInnovationOrganizationMutation_createTechnologyTransferAndInnovationOrganization {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface CreateTechnologyTransferAndInnovationOrganizationMutation {
  createTechnologyTransferAndInnovationOrganization: CreateTechnologyTransferAndInnovationOrganizationMutation_createTechnologyTransferAndInnovationOrganization | null;
}

export interface CreateTechnologyTransferAndInnovationOrganizationMutationVariables {
  url?: string | null;
  title?: string | null;
  text?: string | null;
  region?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTechnologyTransferAndInnovationOrganizationMutation
// ====================================================

export interface DeleteTechnologyTransferAndInnovationOrganizationMutation_deleteTechnologyTransferAndInnovationOrganization {
  id: string;
}

export interface DeleteTechnologyTransferAndInnovationOrganizationMutation {
  deleteTechnologyTransferAndInnovationOrganization: DeleteTechnologyTransferAndInnovationOrganizationMutation_deleteTechnologyTransferAndInnovationOrganization | null;
}

export interface DeleteTechnologyTransferAndInnovationOrganizationMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountTechnologyTransferAndInnovationOrganizationsQuery
// ====================================================

export interface CountTechnologyTransferAndInnovationOrganizationsQuery {
  countTechnologyTransferAndInnovationOrganizations: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TechnologyTransferAndInnovationOrganizationQuery
// ====================================================

export interface TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface TechnologyTransferAndInnovationOrganizationQuery {
  technologyTransferAndInnovationOrganization: TechnologyTransferAndInnovationOrganizationQuery_technologyTransferAndInnovationOrganization;
}

export interface TechnologyTransferAndInnovationOrganizationQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TechnologyTransferAndInnovationOrganizationsQuery
// ====================================================

export interface TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface TechnologyTransferAndInnovationOrganizationsQuery {
  technologyTransferAndInnovationOrganizations: TechnologyTransferAndInnovationOrganizationsQuery_technologyTransferAndInnovationOrganizations[];
}

export interface TechnologyTransferAndInnovationOrganizationsQueryVariables {
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTechnologyTransferNetworkMutation
// ====================================================

export interface UpdateTechnologyTransferNetworkMutation_updateTechnologyTransferNetwork {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface UpdateTechnologyTransferNetworkMutation {
  updateTechnologyTransferNetwork: UpdateTechnologyTransferNetworkMutation_updateTechnologyTransferNetwork | null;
}

export interface UpdateTechnologyTransferNetworkMutationVariables {
  id: string;
  url?: string | null;
  title?: string | null;
  text?: string | null;
  region?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTechnologyTransferNetworkMutation
// ====================================================

export interface CreateTechnologyTransferNetworkMutation_createTechnologyTransferNetwork {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface CreateTechnologyTransferNetworkMutation {
  createTechnologyTransferNetwork: CreateTechnologyTransferNetworkMutation_createTechnologyTransferNetwork | null;
}

export interface CreateTechnologyTransferNetworkMutationVariables {
  url?: string | null;
  title?: string | null;
  text?: string | null;
  region?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTechnologyTransferNetworkMutation
// ====================================================

export interface DeleteTechnologyTransferNetworkMutation_deleteTechnologyTransferNetwork {
  id: string;
}

export interface DeleteTechnologyTransferNetworkMutation {
  deleteTechnologyTransferNetwork: DeleteTechnologyTransferNetworkMutation_deleteTechnologyTransferNetwork | null;
}

export interface DeleteTechnologyTransferNetworkMutationVariables {
  id?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountTechnologyTransferNetworksQuery
// ====================================================

export interface CountTechnologyTransferNetworksQuery {
  countTechnologyTransferNetworks: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TechnologyTransferNetworkQuery
// ====================================================

export interface TechnologyTransferNetworkQuery_technologyTransferNetwork {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface TechnologyTransferNetworkQuery {
  technologyTransferNetwork: TechnologyTransferNetworkQuery_technologyTransferNetwork;
}

export interface TechnologyTransferNetworkQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TechnologyTransferNetworksQuery
// ====================================================

export interface TechnologyTransferNetworksQuery_technologyTransferNetworks {
  id: string;
  url: string | null;
  title: string | null;
  text: string | null;
  region: string | null;
}

export interface TechnologyTransferNetworksQuery {
  technologyTransferNetworks: TechnologyTransferNetworksQuery_technologyTransferNetworks[];
}

export interface TechnologyTransferNetworksQueryVariables {
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LanguageCode {
  DE = "DE",
  EN = "EN",
  ES = "ES",
  FR = "FR",
  IT = "IT",
  KA = "KA",
  RU = "RU",
}

// null
export interface ExpertTranslationInput {
  fullName?: string | null;
  qualification?: string | null;
  academicDegree?: string | null;
  specialization?: string | null;
  workingPlace?: string | null;
  position?: string | null;
  language?: LanguageCode | null;
}

// null
export interface OecdInput {
  code?: string | null;
  translation?: OecdTranslationInput[] | null;
}

// null
export interface OecdTranslationInput {
  name?: string | null;
  language?: LanguageCode | null;
}

// null
export interface LanguageInput {
  code?: string | null;
}

// null
export interface JournalInput {
  id?: string | null;
  pub_num?: string | null;
  translation?: QrjTranslationInput[] | null;
}

// null
export interface QrjTranslationInput {
  address?: string | null;
  language?: LanguageCode | null;
}

// null
export interface ResearchProjectTranslationInput {
  title?: string | null;
  key?: (string | null)[] | null;
  language?: LanguageCode | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================