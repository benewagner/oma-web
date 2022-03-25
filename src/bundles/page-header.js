import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import HeaderLogo from './header-logo.js';
import { useTranslation } from 'react-i18next';
import urls from '@educandu/educandu/utils/urls.js';
import { QuestionOutlined } from '@ant-design/icons';
import Login from '@educandu/educandu/components/login.js';
import permissions from '@educandu/educandu/domain/permissions.js';
import { useUser } from '@educandu/educandu/components/user-context.js';
import LinkPopover from '@educandu/educandu/components/link-popover.js';
import ClientConfig from '@educandu/educandu/bootstrap/client-config.js';
import { FEATURE_TOGGLES } from '@educandu/educandu/domain/constants.js';
import { useLocale } from '@educandu/educandu/components/locale-context.js';
import { useService } from '@educandu/educandu/components/container-context.js';
import { useSettings } from '@educandu/educandu/components/settings-context.js';
import HomeIcon from '@educandu/educandu/components/icons/main-menu/home-icon.js';
import MenuIcon from '@educandu/educandu/components/icons/main-menu/menu-icon.js';
import UsersIcon from '@educandu/educandu/components/icons/main-menu/users-icon.js';
import LogoffIcon from '@educandu/educandu/components/icons/main-menu/logoff-icon.js';
import ImportsIcon from '@educandu/educandu/components/icons/main-menu/imports-icon.js';
import LanguageIcon from '@educandu/educandu/components/icons/main-menu/language-icon.js';
import SettingsIcon from '@educandu/educandu/components/icons/main-menu/settings-icon.js';
import DocumentsIcon from '@educandu/educandu/components/icons/main-menu/documents-icon.js';
import DashboardIcon from '@educandu/educandu/components/icons/main-menu/dashboard-icon.js';

function PageHeader({ onUiLanguageClick }) {
  const user = useUser();
  const settings = useSettings();
  const { uiLanguage } = useLocale();
  const { t } = useTranslation('page');
  const clientConfig = useService(ClientConfig);
  const helpPage = settings?.helpPage?.[uiLanguage];

  const pageMenuItems = [
    {
      key: 'home',
      href: urls.getHomeUrl(),
      text: t('pageNames:home'),
      icon: HomeIcon,
      permission: null,
      showWhen: true
    },
    {
      key: 'dashboard',
      href: urls.getDashboardUrl(),
      text: t('pageNames:dashboard'),
      icon: DashboardIcon,
      permission: null,
      showWhen: !!user
    },
    {
      key: 'docs',
      href: urls.getDocsUrl(),
      text: t('pageNames:docs'),
      icon: DocumentsIcon,
      permission: permissions.VIEW_DOCS,
      showWhen: true
    },
    {
      key: 'users',
      href: urls.getUsersUrl(),
      text: t('pageNames:users'),
      icon: UsersIcon,
      permission: permissions.EDIT_USERS,
      showWhen: true
    },
    {
      key: 'settings',
      href: urls.getSettingsUrl(),
      text: t('pageNames:settings'),
      icon: SettingsIcon,
      permission: permissions.EDIT_SETTINGS,
      showWhen: true
    },
    {
      key: 'import',
      href: urls.getImportsUrl(),
      text: t('pageNames:importBatches'),
      icon: ImportsIcon,
      permission: permissions.MANAGE_IMPORT,
      showWhen: !clientConfig.disabledFeatures.includes(FEATURE_TOGGLES.import)
    },
    {
      key: 'help',
      href: helpPage ? urls.getDocUrl({ key: helpPage.documentKey, slug: helpPage.documentSlug }) : '',
      text: helpPage?.linkTitle,
      icon: QuestionOutlined,
      permission: null,
      showWhen: !!helpPage
    },
    {
      key: 'ui-language',
      onClick: () => onUiLanguageClick(),
      text: t('common:language'),
      icon: LanguageIcon,
      permission: null,
      showWhen: true
    },
    {
      key: 'logout',
      href: urls.getLogoutUrl(),
      text: t('common:logoff'),
      icon: LogoffIcon,
      permission: null,
      showWhen: !!user
    }
  ].filter(item => item.showWhen);

  return (
    <header className="PageHeader">
      <div className="PageHeader-header">
        <div className="PageHeader-headerContent PageHeader-headerContent--left">
          <HeaderLogo />
        </div>
        <div className="PageHeader-headerContent PageHeader-headerContent--right">
          <div className="PageHeader-loginButton">
            <Login />
          </div>
          <LinkPopover items={pageMenuItems} trigger="click" placement="bottomRight">
            <Button className="PageHeader-headerButton" icon={<MenuIcon />} type="link" />
          </LinkPopover>
        </div>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  onUiLanguageClick: PropTypes.func
};

PageHeader.defaultProps = {
  onUiLanguageClick: () => { }
};

export default PageHeader;
