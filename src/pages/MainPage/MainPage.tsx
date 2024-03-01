import React, {FC} from 'react';
import { Box, Typography } from '@mui/material';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
    return (
        <Box className={styles.sectionWrapper}>
            <Box className={styles.sectionContainer}>
                {/* General info */}
                <section>
                    <Typography variant='h1' className={styles.heading}>Что такое <span className={styles.highlightedText}>платёжеспособность</span></Typography>
                    <Box className={styles.definitionContainer}>
                        <Typography paragraph className={styles.primaryText}>Платежеспособность предприятия — это способность оплачивать финансовые обязательства в срок и в полном объеме. Если денег достаточно, чтобы вовремя выдавать зарплату, рассчитываться по сделкам и погашать кредиты, платежеспособность высокая. Когда есть просроченные долги или оборотных средств не хватает для исполнения обязательств в полном объеме — очевидны проблемы с бюджетом.</Typography>
                        <Typography paragraph className={styles.primaryText}>Платёжеспособность компании складывается из двух компонентов:</Typography>
                        <ul className={styles.solvencyComponentsList}>
                            <li>
                                <Typography paragraph className={styles.primaryText}><span className={styles.highlightedText}>наличия активов</span> ― имущества и денег, которых хватит для погашения всех имеющихся у организации обязательств;</Typography>
                            </li>
                            <li>
                                <Typography paragraph className={styles.primaryText}><span className={styles.highlightedText}>высокой ликвидности</span> активов ― возможности легко их продать и получить нужное количество денег.</Typography>
                            </li>
                        </ul>
                        <Typography paragraph className={styles.primaryText}>Высокая платёжеспособность показывает банкам, инвесторам и контрагентам, что компании можно доверять. Однако оценивать этот показатель нужно не только в их интересах, но и для себя, чтобы понять, как идут дела у вашего бизнеса.</Typography>
                    </Box>
                </section>

                <section>
                    <Typography variant='h1' className={styles.heading}>Зачем рассчитывать <span className={styles.highlightedText}>платёжеспособность</span> бизнеса</Typography>
                    <Box className={styles.definitionContainer}>
                        <Typography paragraph className={styles.primaryText}>Для крупных предприятий оценка финансовых показателей – стандартная практика. Малый бизнес обычно не анализирует их на регулярной основе. Когда обороты небольшие, соотношение пассивов и активов легко оценить в уме. Расчет показателей необходим в следующих ситуациях:</Typography>
                        <ul className={styles.solvencyComponentsList}>
                            <li>
                                <Typography paragraph className={styles.primaryText}>Предприятие самостоятельно оценивает платежеспособность перед принятием важных решений. Например, перед заключением договоров с новыми контрагентами или привлечением источников финансирования.</Typography>
                            </li>
                            <li>
                                <Typography paragraph className={styles.primaryText}>Банк оценивает платежеспособность организации для принятия решения о выдаче кредита. Также интересоваться показателями могут инвесторы, которые планируют финансировать предприятие.</Typography>
                            </li>
                        </ul>
                        <Typography paragraph className={styles.primaryText}>В любом случае, цель — выяснить, получится ли у организации выполнять свои финансовые обязательства в срок. Даже если оборотных средств достаточно на текущий момент, в будущем ситуация может измениться. Анализ показывает, хватит ли у предприятия средств на оплату дополнительных расходов в перспективе.</Typography>
                    </Box>
                </section>
            </Box>
        </Box>
    );
};

export default MainPage;
