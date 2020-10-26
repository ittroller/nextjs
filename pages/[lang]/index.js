import { PublicLayout } from '../../layout/public';
import withLocale from '../../hocs/withLocale';
import useTranslation from '../../hooks/useTranslation';

const HomePage = () => {
  const { t, locale } = useTranslation();
  console.log(locale);
  return (
    <PublicLayout>
      <div className="home">HOME {t('about')}</div>
    </PublicLayout>
  );
};

export default withLocale(HomePage);
