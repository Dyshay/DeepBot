import { createReducer, on } from '@ngrx/store';
import { webUserActions } from '../actions';
import { User } from '../../../../webModel/User';
import { LogMessage } from '../../../../webModel/LogMessage';
import icLayers from '@iconify/icons-ic/twotone-layers';
import { NavigationItem, NavigationLink, NavigationDropdown } from 'src/@vex/interfaces/navigation-item.interface';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import theme from '../../../../@vex/utils/tailwindcss';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import icUpdate from '@iconify/icons-ic/twotone-update';

export interface State {
  user: User | null,
  error: any | null,
  sideNav: NavigationItem[],
  pending: boolean,
  connectedBots: string[],
}

export const initialState: State = {
  user: null,
  error: null,
  sideNav: [{
    type: 'link',
    label: 'Tableau de bord',
    route: '/dashboards',
    icon: icLayers,
  }, {
    type: 'subheading',
    label: 'Mes bot',
    children: []
  }],
  pending: false,
  connectedBots: [],
}


export const reducer = createReducer(initialState,

  on(webUserActions.login, (state) => ({ ...state, pending: true })),
  on(webUserActions.loginSuccess, (state, { user }) => ({ ...state, user, pending: false })),
  on(webUserActions.loginFailure, (state, { error }) => ({ ...state, error, pending: false })),


  on(webUserActions.getUser, (state) => ({ ...state, pending: true })),
  on(webUserActions.getUserSuccess, (state, { user }) => ({ ...state, user, pending: false })),
  on(webUserActions.getUserFailure, (state, { error }) => ({ ...state, error, pending: false })),

  on(webUserActions.getBotNav, (state) => ({ ...state, pending: true })),
  on(webUserActions.getBotNavSuccess, (state, {sideNav}) => {
    var sideItems: NavigationItem[] = [];
    var item: NavigationLink
    var group: NavigationDropdown = null;
    var itemGroup: NavigationLink = null;
    sideItems.push({
      type: 'link',
      label: 'Tableau de bord',
      route: '/dashboards',
      icon: icLayers,
    });
    sideItems.push({
      type: 'subheading',
      label: 'Mes bot',
      children: []
    });

    for (var i = 0; i < sideNav.items.length; i++) {
      group = { children: null, label: null, type: null, badge: null, icon: null };
      group.children = [];

      if (sideNav.items[i].isGroup) {
        group.label = sideNav.items[i].name;
        group.route = '/group-dashboard/' + sideNav.items[i].id;
        group.type = 'dropdown';
        group.icon = icLayers;
        for (var j = 0; j < sideNav.items[i].children.length; j++) {
          itemGroup = { label: null, route: null, type: null, badge: null, fragment: null }
          itemGroup.label = sideNav.items[i].children[j].name;
          itemGroup.route = '/bot-dashboard/' + sideNav.items[i].children[j].id;
          itemGroup.icon = icLayers;
          itemGroup.type = 'link';
          group.children.push(itemGroup);
        }
        sideItems.push(group);
      }
      else {
        item = { label: null, route: null, type: null, badge: null, fragment: null };
        item.label = sideNav.items[i].name;
        item.type = 'link';
        item.icon = icLayers;
        item.route = '/bot-dashboard/' + sideNav.items[i].id;
        sideItems.push(item);
      }
    }
    sideItems.push({
      type: 'subheading',
      label: 'Customiser',
      children: [{
        type: 'link',
        label: 'Configuration',
        route: () => this.layoutService.openConfigpanel(),
        icon: icSettings
      }]
    });
    sideItems.push({
      type: 'dropdown',
      label: 'Vex',
      icon: icContactSupport,
      children: [
        {
          type: 'link',
          label: 'All-In-One Table',
          route: '/apps/aio-table',
          icon: icAssigment
        },
        {
          type: 'link',
          label: 'Getting Started',
          route: '/apps/help-center/getting-started'
        },
        {
          type: 'link',
          label: 'Pricing & Plans',
          route: '/apps/help-center/pricing'
        },
        {
          type: 'link',
          label: 'FAQ',
          route: '/apps/help-center/faq'
        },
        {
          type: 'link',
          label: 'Guides',
          route: '/apps/help-center/guides'
        },
        {
          type: 'link',
          label: 'Calendar',
          route: '/apps/calendar',
          icon: icDateRange,
          badge: {
            value: '12',
            background: theme.colors['deep-purple']['500'],
            color: theme.textColor['deep-purple-contrast']['500']
          }
        },
        {
          type: 'link',
          label: 'Chat',
          route: '/apps/chat',
          icon: icChat,
          badge: {
            value: '16',
            background: theme.colors.cyan['500'],
            color: theme.textColor['cyan-contrast']['600']
          }
        },
        {
          type: 'link',
          label: 'WYSIWYG Editor',
          route: '/apps/editor',
          icon: icChromeReaderMode
        },
        {
          type: 'link',
          label: 'List - Grid',
          route: '/apps/contacts/grid',
        },
        {
          type: 'link',
          label: 'List - Table',
          route: '/apps/contacts/table',
        },
        {
          type: 'link',
          label: 'Scrumboard',
          route: '/apps/scrumboard',
          icon: icAssessment,
          badge: {
            value: 'NEW',
            background: theme.colors.primary['500'],
            color: theme.textColor['primary-contrast']['500']
          }
        },
        {
          type: 'link',
          label: 'Login',
          route: '/login'
        },
        {
          type: 'link',
          label: 'Register',
          route: '/register'
        },
        {
          type: 'link',
          label: 'Forgot Password',
          route: '/forgot-password'
        },
        {
          type: 'link',
          label: 'Coming Soon',
          icon: icWatchLater,
          route: '/coming-soon'
        },
        {
          type: 'dropdown',
          label: 'Errors',
          icon: icError,
          badge: {
            value: '4',
            background: theme.colors.green['500'],
            color: theme.textColor['green-contrast']['600']
          },
          children: [
            {
              type: 'link',
              label: '404',
              route: '/pages/error-404'
            },
            {
              type: 'link',
              label: '500',
              route: '/pages/error-500'
            },
            {
              type: 'link',
              label: 'Pricing',
              icon: icAttachMoney,
              route: '/pages/pricing'
            },
            {
              type: 'link',
              label: 'Profile',
              icon: icPersonOutline,
              route: '/pages/profile'
            },
            {
              type: 'link',
              label: 'Invoice',
              icon: icReceipt,
              route: '/pages/invoice'
            },
            {
              type: 'link',
              label: 'FAQ',
              icon: icHelp,
              route: '/pages/faq'
            },
            {
              type: 'link',
              label: 'Guides',
              icon: icBook,
              route: '/pages/guides',
              badge: {
                value: '18',
                background: theme.colors.teal['500'],
                color: theme.textColor['teal-contrast']['500']
              },
            }
          ]
        },
        {
          type: 'dropdown',
          label: 'Components',
          icon: icBubbleChart,
          children: [
            {
              type: 'link',
              label: 'Overview',
              route: '/ui/components/overview'
            },
            {
              type: 'link',
              label: 'Autocomplete',
              route: '/ui/components/autocomplete'
            },
            {
              type: 'link',
              label: 'Buttons',
              route: '/ui/components/buttons'
            },
            {
              type: 'link',
              label: 'Button Group',
              route: '/ui/components/button-group'
            },
            {
              type: 'link',
              label: 'Cards',
              route: '/ui/components/cards'
            },
            {
              type: 'link',
              label: 'Checkbox',
              route: '/ui/components/checkbox'
            },
            {
              type: 'link',
              label: 'Dialogs',
              route: '/ui/components/dialogs'
            },
            {
              type: 'link',
              label: 'Grid List',
              route: '/ui/components/grid-list'
            },
            {
              type: 'link',
              label: 'Input',
              route: '/ui/components/input'
            },
            {
              type: 'link',
              label: 'Lists',
              route: '/ui/components/lists'
            },
            {
              type: 'link',
              label: 'Menu',
              route: '/ui/components/menu'
            },
            {
              type: 'link',
              label: 'Progress',
              route: '/ui/components/progress'
            },
            {
              type: 'link',
              label: 'Progress Spinner',
              route: '/ui/components/progress-spinner'
            },
            {
              type: 'link',
              label: 'Radio',
              route: '/ui/components/radio'
            },
            {
              type: 'link',
              label: 'Slide Toggle',
              route: '/ui/components/slide-toggle'
            },
            {
              type: 'link',
              label: 'Slider',
              route: '/ui/components/slider'
            },
            {
              type: 'link',
              label: 'Snack Bar',
              route: '/ui/components/snack-bar'
            },
            {
              type: 'link',
              label: 'Tooltip',
              route: '/ui/components/tooltip'
            },
          ]
        },
        {
          type: 'dropdown',
          label: 'Forms',
          icon: icFormatColorText,
          children: [
            {
              type: 'link',
              label: 'Form Elements',
              route: '/ui/forms/form-elements'
            },
            {
              type: 'link',
              label: 'Form Wizard',
              route: '/ui/forms/form-wizard'
            }
          ]
        },
        {
          type: 'dropdown',
          label: 'Icons',
          icon: icStar,
          children: [
            {
              type: 'link',
              label: 'Material Icons',
              route: '/ui/icons/ic'
            },
            {
              type: 'link',
              label: 'FontAwesome Icons',
              route: '/ui/icons/fa'
            }
          ]
        },
        {
          type: 'dropdown',
          label: 'Page Layouts',
          icon: icViewCompact,
          children: [
            {
              type: 'dropdown',
              label: 'Card',
              children: [
                {
                  type: 'link',
                  label: 'Default',
                  route: '/ui/page-layouts/card',
                  routerLinkActive: { exact: true }
                },
                {
                  type: 'link',
                  label: 'Tabbed',
                  route: '/ui/page-layouts/card/tabbed',
                },
                {
                  type: 'link',
                  label: 'Large Header',
                  route: '/ui/page-layouts/card/large-header',
                  routerLinkActive: { exact: true }
                },
                {
                  type: 'link',
                  label: 'Tabbed & Large Header',
                  route: '/ui/page-layouts/card/large-header/tabbed'
                }
              ]
            },
            {
              type: 'dropdown',
              label: 'Simple',
              children: [
                {
                  type: 'link',
                  label: 'Default',
                  route: '/ui/page-layouts/simple',
                  routerLinkActive: { exact: true }
                },
                {
                  type: 'link',
                  label: 'Tabbed',
                  route: '/ui/page-layouts/simple/tabbed',
                },
                {
                  type: 'link',
                  label: 'Large Header',
                  route: '/ui/page-layouts/simple/large-header',
                  routerLinkActive: { exact: true }
                },
                {
                  type: 'link',
                  label: 'Tabbed & Large Header',
                  route: '/ui/page-layouts/simple/large-header/tabbed'
                }
              ]
            },
            {
              type: 'link',
              label: 'Blank',
              icon: icPictureInPicture,
              route: '/ui/page-layouts/blank'
            },
          ]
        },
        {
          type: 'link',
          label: 'Changelog',
          route: '/documentation/changelog',
          icon: icUpdate
        },
        {
          type: 'dropdown',
          label: 'Getting Started',
          icon: icBook,
          children: [
            {
              type: 'link',
              label: 'Introduction',
              route: '/documentation/introduction',
              fragment: 'introduction',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Folder Structure',
              route: '/documentation/folder-structure',
              fragment: 'folder-structure',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Installation',
              route: '/documentation/installation',
              fragment: 'installation',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Development Server',
              route: '/documentation/start-development-server',
              fragment: 'start-development-server',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Build for Production',
              route: '/documentation/build-for-production',
              fragment: 'build-for-production',
              routerLinkActive: { exact: true }
            }
          ]
        },
        {
          type: 'dropdown',
          label: 'Customization',
          icon: icBook,
          children: [
            {
              type: 'link',
              label: 'Configuration',
              route: '/documentation/configuration',
              fragment: 'configuration',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Changing Styling',
              route: '/documentation/changing-styling-and-css-variables',
              fragment: 'changing-styling-and-css-variables',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Using Custom Colors',
              route: '/documentation/using-custom-colors-for-the-primarysecondarywarn-palettes',
              fragment: 'using-custom-colors-for-the-primarysecondarywarn-palettes',
              routerLinkActive: { exact: true }
            },
            {
              type: 'link',
              label: 'Adding Menu Items',
              route: '/documentation/adding-menu-items',
              fragment: 'adding-menu-items',
              routerLinkActive: { exact: true }
            },
          ]
        },
        {
          type: 'link',
          label: 'Further Help',
          icon: icBook,
          route: '/documentation/further-help',
          fragment: 'further-help',
          routerLinkActive: { exact: true }
        },
      ]
    })

    return { ...state, sideNav: sideItems };
  }

  ),

  on(webUserActions.getBotNavFailure, (state, {error}) => ({...state, error})),
  on(webUserActions.getConnectedBot, (state, {ids}) => ({...state, connectedBots: ids}))
)

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
export const getUser = (state: State) => state.user;
export const getSideNav = (state: State) => state.sideNav;
export const getConnectedBot = (state: State) => state.connectedBots;
