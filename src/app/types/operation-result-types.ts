

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

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LanguageCode {
  EN = "EN",
  KA = "KA",
}

//==============================================================
// END Enums and Input Objects
//==============================================================