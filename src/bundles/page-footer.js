import React from 'react';
import routes from '@educandu/educandu/utils/routes.js';
import { useLocale } from '@educandu/educandu/components/locale-context.js';
import { useSettings } from '@educandu/educandu/components/settings-context.js';

function PageFooter() {
  const settings = useSettings();
  const { uiLanguage } = useLocale();

  return (
    <footer className="PageFooter">
      {(settings?.footerLinks?.[uiLanguage] || []).map((fl, index) => (
        <span key={index.toString()} className="PageFooter-linkWrapper">
          <a className="PageFooter-link" href={routes.getDocUrl({ id: fl.documentId })}>{fl.linkTitle}</a>
        </span>
      ))}
    </footer>
  );
}

export default PageFooter;
