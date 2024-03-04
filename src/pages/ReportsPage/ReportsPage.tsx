import React, {FC} from 'react';

import styles from './ReportsPage.module.scss';
import { SolvenciesTable } from 'components';

const ReportsPage: FC = () => {
    return (
        <div className={styles.container}>
            <SolvenciesTable />
        </div>
    );
};

export default ReportsPage;
