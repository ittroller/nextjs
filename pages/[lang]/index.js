import { withTranslation } from '../../config/i18n';
import { PublicLayout } from '../../layout/public';

const HomePage = props => {
  console.log('[lang] index.js');
  console.log(1111, props);
  return (
    <PublicLayout>
      <div className="home">HOME {props.t('hello')}</div>
    </PublicLayout>
  );
};

export default withTranslation('default')(HomePage);
