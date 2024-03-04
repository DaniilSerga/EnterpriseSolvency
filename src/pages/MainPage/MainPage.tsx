import React, {FC} from 'react';
import { Box, Typography } from '@mui/material';
import styles from './MainPage.module.scss';
import headingImage from 'assets/image.png';
import { Link } from 'react-router-dom';
import {Calculator} from 'components';
import formula from 'assets/formula.png';

const MainPage: FC = () => {
    return (
        <Box className={styles.sectionWrapper}>
            <Box className={styles.sectionContainer}>
                {/* General info */}
                <section>
                    <Box className={styles.headingImageContainer}>
                        <img src={headingImage} alt="" />    
                    </Box>
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

                <section>
                    <Typography variant='h1' className={styles.heading}>Калькулятор <span className={styles.highlightedText}>платёжеспособности</span></Typography>
                    <Box className={styles.definitionContainer}>
                        <Typography paragraph className={styles.primaryText}>Мы предлагаем вам рассчитать платёжеспособность вашего предприятия. Для этого необходимо перейти по ссылке, нажав на кнопку ниже и ввести входные данные. После расчёта, на экран будет выведен <span className={styles.highlightedText}>результат</span> расчёта, сформирован <span className={styles.highlightedText}>вывод</span> на основе полученного результата, а сама операция будет записана в таблицу на странице <Link to="reports" className={styles.highlightedText}>"Отчётность"</Link> </Typography>
                    </Box>
                </section>

                <section>
                    <Box className={styles.formulaSectionWrapper}>
                        <Box className={styles.formulaContainer}>
                            <img className={styles.formulaImage} src={formula} alt="formula" />
                            <Box className={styles.formulaDescription}>
                                <Typography className={styles.primaryText} paragraph><span className={styles.highlightedText}>ДСнг</span> - денежные средства на начало года</Typography>
                                <Typography className={styles.primaryText} paragraph><span className={styles.highlightedText}>ДСпг</span> - денежные средства поступившие за год</Typography>
                                <Typography className={styles.primaryText} paragraph><span className={styles.highlightedText}>ДСиг</span> - денежные средства израсходованные за год</Typography>
                            </Box>
                        </Box>
                        <Calculator />
                    </Box>
                </section>
            </Box>
        </Box>
    );
};

export default MainPage;
