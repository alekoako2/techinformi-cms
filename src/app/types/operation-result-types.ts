

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
  code: string | null;
  translation: (QrjJournalsQuery_qrjJournals_translation | null)[] | null;
}

export interface QrjJournalsQuery {
  qrjJournals: QrjJournalsQuery_qrjJournals[];
}

export interface QrjJournalsQueryVariables {
  languageCode?: LanguageCode | null;
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