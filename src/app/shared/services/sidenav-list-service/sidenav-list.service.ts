import { Injectable } from '@angular/core'
import { SidenavListItem, SidenavListItemType } from '../../models/Sidenav-List'
import { LanguageCode } from '@graphql'
// Enums

@Injectable({
  providedIn: 'root',
})
export class SidenavListService {
  get SidenavList(): SidenavListItem[] {
    return this._SidenavList
  }

  private _SidenavList: SidenavListItem[] = [
    {
      type: SidenavListItemType.ACCORDION,
      name: [
        {
          languageCode: LanguageCode.KA,
          value: 'ჩვენს შესახებ',
        },
        {
          languageCode: LanguageCode.EN,
          value: 'About Us',
        },
      ],
      list: [
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'ზოგადი',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'General',
            },
          ],
          routerLink: '/about-us/general',
        },
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'დებულება',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Regulation',
            },
          ],
          routerLink: '/about-us/regulation',
        },
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'სტრუქტურა',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Structure',
            },
          ],
          routerLink: '/about-us/employees-structure',
        },
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'თანამშრომლები',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Employees',
            },
          ],
          routerLink: '/about-us/employees',
        },
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'ნორმატიული დოკუმენტაცია',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Normative Documentation',
            },
          ],
          routerLink: '/about-us/normative-documentation',
        },
      ],
    } /* About Us */,
    {
      type: SidenavListItemType.ACCORDION,
      name: [
        {
          languageCode: LanguageCode.KA,
          value: 'სამეცნიერო საქმიანობა',
        },
        {
          languageCode: LanguageCode.EN,
          value: 'Scientific Activity',
        },
      ],
      list: [
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'სამეცნიერო მიმართულებები',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Scientific Directions',
            },
          ],
          routerLink: '/scientific-activity/directions',
        },
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'პროექტები',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Projects',
            },
          ],
          routerLink: '/scientific-activity/projects',
        },
        {
          type: SidenavListItemType.BUTTON,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'პუბლიკაციები',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Publications',
            },
          ],
          routerLink: '/scientific-activity/publications',
        },
      ],
    } /* Scientific Activity */,
    {
      type: SidenavListItemType.ACCORDION,
      name: [
        {
          languageCode: LanguageCode.KA,
          value: 'რესურსები',
        },
        {
          languageCode: LanguageCode.EN,
          value: 'Resources',
        },
      ],
      list: [
        {
          type: SidenavListItemType.ACCORDION,
          name: [
            {
              languageCode: LanguageCode.KA,
              value: 'ელექტრონული რესურსები',
            },
            {
              languageCode: LanguageCode.EN,
              value: 'Electronic Resources',
            },
          ],
          list: [
            {
              type: SidenavListItemType.ACCORDION,
              name: [
                {
                  languageCode: LanguageCode.KA,
                  value: 'მონაცემთა ბაზები',
                },
                {
                  languageCode: LanguageCode.EN,
                  value: 'Databases',
                },
              ],
              list: [
                {
                  type: SidenavListItemType.BUTTON,
                  name: [
                    {
                      languageCode: LanguageCode.KA,
                      value: 'სამეცნიერო-კვლევითი პროექტები',
                    },
                    {
                      languageCode: LanguageCode.EN,
                      value: 'Research Projects',
                    },
                  ],
                  routerLink: '/',
                } /* Research Projects */,
                {
                  type: SidenavListItemType.BUTTON,
                  name: [
                    {
                      languageCode: LanguageCode.KA,
                      value: 'მეცნიერები/ექსპერტები',
                    },
                    {
                      languageCode: LanguageCode.EN,
                      value: 'Scientists/Experts',
                    },
                  ],
                  routerLink: '/',
                } /* Scientists/Experts */,
                {
                  type: SidenavListItemType.BUTTON,
                  name: [
                    {
                      languageCode: LanguageCode.KA,
                      value: 'საქართველოს სამეცნიერო პუბლიკაციები',
                    },
                    {
                      languageCode: LanguageCode.EN,
                      value: 'Georgian Scientific Publications',
                    },
                  ],
                  routerLink: '/',
                } /* Georgian Scientific Publications */,
                {
                  type: SidenavListItemType.BUTTON,
                  name: [
                    {
                      languageCode: LanguageCode.KA,
                      value: 'სამეცნიერო ორგანიზაციები',
                    },
                    {
                      languageCode: LanguageCode.EN,
                      value: 'Research Organizations',
                    },
                  ],
                  routerLink: '/',
                } /* Research Organizations */,
                {
                  type: SidenavListItemType.ACCORDION,
                  name: [
                    {
                      languageCode: LanguageCode.KA,
                      value:
                        'საქართველოს მეცნიერთა პუბლიკაციები მაღალი რეიტინგის უცხოურ ჟურნალებში',
                    },
                    {
                      languageCode: LanguageCode.EN,
                      value:
                        'Georgian Scientists’ Publication in High-Ranking Foreign Journals',
                    },
                  ],
                  list: [
                    {
                      type: SidenavListItemType.BUTTON,
                      name: [
                        {
                          languageCode: LanguageCode.KA,
                          value: 'Wos Core Collection',
                        },
                        {
                          languageCode: LanguageCode.EN,
                          value: 'Wos Core Collection',
                        },
                      ],
                      routerLink: '/',
                    } /* Wos Core Collection */,
                    {
                      type: SidenavListItemType.BUTTON,
                      name: [
                        {
                          languageCode: LanguageCode.KA,
                          value: 'Wos Core Collection',
                        },
                        {
                          languageCode: LanguageCode.EN,
                          value: 'Wos Core Collection',
                        },
                      ],
                      routerLink: '/',
                    } /* WOS Full */,
                  ],
                } /* Georgian Scientists’ Publication in High-Ranking Foreign Journals */,
              ],
            } /*Databases*/,
          ],
        } /* Electronic Resources*/,
      ],
    } /* Resources */,
    {
      type: SidenavListItemType.BUTTON,
      name: [
        {
          languageCode: LanguageCode.KA,
          value: 'მომსახურება',
        },
        {
          languageCode: LanguageCode.EN,
          value: 'Services',
        },
      ],
      routerLink: '/services-page',
    } /* Services */,
    {
      type: SidenavListItemType.BUTTON,
      name: [
        {
          languageCode: LanguageCode.KA,
          value: 'თანამშრომლობა',
        },
        {
          languageCode: LanguageCode.EN,
          value: 'Partnership',
        },
      ],
      routerLink: '/partnership',
    } /* Partnership */,
    {
      type: SidenavListItemType.BUTTON,
      name: [
        {
          languageCode: LanguageCode.KA,
          value: 'კონტაქტი',
        },
        {
          languageCode: LanguageCode.EN,
          value: 'Contact',
        },
      ],
      routerLink: '/contact',
    } /* Contact */,
  ]
}
