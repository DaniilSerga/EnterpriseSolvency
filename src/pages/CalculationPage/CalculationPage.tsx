import React, {FC, useEffect, useState} from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { AbsoluteLiquidityCalculator, AssetsCoverageCalculator, ChooseCompanyInput, CommonSolvencyCalculator, CurrentLiquidityCalculator, ObligationsSolvencyCalculator } from 'components';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@mui/icons-material';
import formula from 'assets/formula.png';
import currentSolvencyFormula from 'assets/solvencyCurrent.png';
import absoluteLiquidityFormula from 'assets/absoluteLiquidity.png';
import currentLiquidityFomula from 'assets/currentLiquidity.png';
import assetsCoverageFormula from 'assets/assetsCoverage.png';

import styles from './CalculationPage.module.scss';
import { Company } from 'types';

const CalculationPage: FC = () => {
    const [chosenCompany, setChosenCompany] = useState<Company | null>(null);
    
    const setCurrentCompany = (company: Company | null) => {
        setChosenCompany(company);
    };

    useEffect(() => {
        console.log(chosenCompany);
    }, [chosenCompany]);
    
    return (
        <div className={styles.pageContainer}>
            <Box className={styles.pageWrapper}>
                <ChooseCompanyInput isCompanySet={!!chosenCompany} setChosenCompany={setCurrentCompany} />
                <section>
                    <Typography variant='h1' className={styles.heading}><span className={styles.highlightedText}>Платёжеспособность</span></Typography>
                    <Box className={styles.indicatorDescription}>
                        <Typography className={styles.primaryText} paragraph>Способность компании полностью и вовремя оплачивать свои обязательства называют платёжеспособностью. Как правило, к ним относят кредиты, займы, оплату поставок, но можно говорить и про способность предприятия оплачивать любые текущие расходы без задержек или закрыть все долги с помощью имеющихся активов.</Typography>
                        <Typography className={styles.primaryText} paragraph>Высокая платёжеспособность показывает банкам, инвесторам и контрагентам, что компании можно доверять. Однако оценивать этот показатель нужно не только в их интересах, но и для себя, чтобы понять, как идут дела у вашего бизнеса.</Typography>
                        <Typography className={styles.primaryText} paragraph>Анализ платёжеспособности покажет есть ли в ближайшей перспективе риск банкротства, не грозят ли бизнесу кассовые разрывы, какие у компании перспективы роста и есть ли возможность досрочно погасить кредит.</Typography>
                        <Typography className={styles.primaryText} paragraph>Основные источники информации о финансовом состоянии фирмы находятся в налоговом отчёте, бухгалтерском балансе, отчёте о финансовых результатах и в отчёте о движении денежных средств</Typography>
                        <Typography className={styles.primaryText} paragraph>Ниже вы можете рассчитать такие показатели платёжеспособности как <span className={styles.highlightedText}>коэффициент платёжеспособности</span> и <span className={styles.highlightedText}>коэффициент платёжеспособности по текущим обязательствам</span></Typography>
                    </Box>
                    <Accordion disabled={!chosenCompany}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography paragraph className={styles.primaryText}>Коэффициент платёжеспособности</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.definitionContainer}>
                                <Typography paragraph className={styles.primaryText}>Мы предлагаем вам рассчитать платёжеспособность вашего предприятия. Для этого необходимо ввести входные данные ниже. После расчёта, на экран будет выведен <span className={styles.highlightedText}>результат</span> расчёта, сформирован <span className={styles.highlightedText}>вывод</span> на основе полученного результата, а сама операция будет записана в таблицу на странице <Link to="/reports" className={styles.highlightedText}>"Отчётность"</Link> </Typography>
                                <Typography paragraph className={styles.primaryText}>Итоговое значение не должно быть меньше 1. Оптимальное значение ― от 1 до 2. В периоды экономической неопределённости ― от 1,5 до 2,5. Если коэффициент ниже ― вероятно, компания закредитована и не обладает достаточным капиталом, чтобы покрыть долги. Это может грозить банкротством в будущем.</Typography>
                            </Box>
                            <Box className={styles.formulaSectionWrapper}>
                                <Box className={styles.formulaContainer}>
                                    <img className={styles.formulaImage} src={formula} alt="formula" />
                                    <Box className={styles.formulaDescription}>
                                        <Typography className={styles.primaryText} paragraph><span className={styles.highlightedText}>ДСнг</span> - денежные средства на начало года</Typography>
                                        <Typography className={styles.primaryText} paragraph><span className={styles.highlightedText}>ДСпг</span> - денежные средства поступившие за год</Typography>
                                        <Typography className={styles.primaryText} paragraph><span className={styles.highlightedText}>ДСиг</span> - денежные средства израсходованные за год</Typography>
                                    </Box>
                                </Box>
                                {chosenCompany && (
                                    <CommonSolvencyCalculator companyId={chosenCompany.id} />
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled={!chosenCompany}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography paragraph className={styles.primaryText}>Коэффициент платёжеспособности по текущим обязательствам</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.definitionContainer}>
                                <Typography paragraph className={styles.primaryText}>Данный коэффициент показывает, в течение какого времени компания сможет погасить текущие обязательства за счёт выручки.</Typography>
                                <Typography paragraph className={styles.primaryText}>Если результат равен 6 месяцам и меньше, у компании достаточный размер выручки, чтобы расплатиться с долгами. Если нет ― нужно подумать, как увеличить выручку или уменьшить долги.</Typography>
                                <Typography paragraph className={styles.primaryText}>Мы предлагаем вам рассчитать платёжеспособность по текущим обязательствам вашего предприятия. Для этого необходимо ввести входные данные ниже. После расчёта, на экран будет выведен <span className={styles.highlightedText}>результат</span> расчёта, сформирован <span className={styles.highlightedText}>вывод</span> на основе полученного результата, а сама операция будет записана в таблицу на странице <Link to="/reports" className={styles.highlightedText}>"Отчётность"</Link> </Typography>
                            </Box>
                            <Box className={styles.formulaSectionWrapper}>
                                <Box className={styles.formulaContainer}>
                                    <img className={styles.currentSolvencyFormulaImage} src={currentSolvencyFormula} alt="formula" />
                                </Box>
                                { chosenCompany && (
                                    <ObligationsSolvencyCalculator companyId={chosenCompany.id} />
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </section>
                <section>
                    <Typography variant='h1' className={styles.heading}><span className={styles.highlightedText}>Ликвидность</span></Typography>
                    <Box className={styles.indicatorDescription}>
                        <Typography className={styles.primaryText} paragraph>Коэффициенты платёжеспособности компании, как правило, не дают полную картину состояния бизнеса. Финансовый директор и бухгалтер смотрят ещё и на показатели ликвидности.</Typography>
                        <Typography className={styles.primaryText} paragraph>Ликвидность в этом случае ― показатель того, как быстро компания сможет продать свои активы, чтобы рассчитаться по долгам. Компания считается ликвидной, если активов (денег и имущества) у неё больше, чем пассивов (долгов).</Typography>
                        <Typography className={styles.primaryText} paragraph>Оценить ликвидность компании помогут три коэффициента: <span className={styles.highlightedText}>коэффициент абсолютной ликвидности</span>, <span className={styles.highlightedText}>коэффициент текущей ликвидности</span>, <span className={styles.highlightedText}>коэффициент покрытия активов</span></Typography>
                    </Box>
                    <Accordion disabled={!chosenCompany}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography paragraph className={styles.primaryText}>Коэффициент абсолютной ликвидности</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.definitionContainer}>
                                <Typography paragraph className={styles.primaryText}>Мы предлагаем вам рассчитать абсолютную ликвидность вашего предприятия. Для этого необходимо ввести входные данные ниже. После расчёта, на экран будет выведен <span className={styles.highlightedText}>результат</span> расчёта, сформирован <span className={styles.highlightedText}>вывод</span> на основе полученного результата, а сама операция будет записана в таблицу на странице <Link to="/reports" className={styles.highlightedText}>"Отчётность"</Link> </Typography>
                                <Typography paragraph className={styles.primaryText}>Покажет, какую часть краткосрочных обязательств организация может погасить немедленно. Для расчёта коэффициента нужно денежные средства и денежные эквиваленты разделить на сумму краткосрочных обязательств.</Typography>
                                <Typography paragraph className={styles.primaryText}>Значение должно быть выше 0,2. Соответственно, не менее 20% обязательств нужно хранить в деньгах.</Typography>
                            </Box>
                            <Box className={styles.formulaSectionWrapper}>
                                <Box className={styles.formulaContainer}>
                                    <img className={styles.currentSolvencyFormulaImage} src={absoluteLiquidityFormula} alt="formula" />
                                </Box>
                                {chosenCompany && (
                                    <AbsoluteLiquidityCalculator companyId={chosenCompany.id} />
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled={!chosenCompany}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography paragraph className={styles.primaryText}>Коэффициент текущей ликвидности</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.definitionContainer}>
                                <Typography paragraph className={styles.primaryText}>Мы предлагаем вам рассчитать текущую ликвидности вашего предприятия. Для этого необходимо ввести входные данные ниже. После расчёта, на экран будет выведен <span className={styles.highlightedText}>результат</span> расчёта, сформирован <span className={styles.highlightedText}>вывод</span> на основе полученного результата, а сама операция будет записана в таблицу на странице <Link to="/reports" className={styles.highlightedText}>"Отчётность"</Link> </Typography>
                                <Typography paragraph className={styles.primaryText}>Покажет, может ли организация вести текущую деятельность и погасить краткосрочные обязательства за счёт оборотных активов. Для расчёта коэффициента нужно оборотные активы разделить на сумму краткосрочных обязательств.</Typography>
                                <Typography paragraph className={styles.primaryText}>К оборотным активам относят деньги, запасы, сырьё, дебиторскую задолженность ― всё то, что используется для ведения деятельности или приобретается для перепродажи, а также полностью оборачивается в течение года и приносит прибыль. Например, продукты в кафе или ткани в швейной мастерской. Эти активы преобразовываются в то, что приносит прибыль ― готовые блюда, одежду ― и продаются.</Typography>
                                <Typography paragraph className={styles.primaryText}>Значение коэффициента текущей ликвидности меньше 1,5 говорит о низкой ликвидности активов ― в случае чего их придётся долго продавать, а это риск. Выше 2,5 ― активов много, но они приносят меньше прибыли, чем могут. Идеальное значение ― диапазон между 1,5 и 2,5.</Typography>
                            </Box>
                            <Box className={styles.formulaSectionWrapper}>
                                <Box className={styles.formulaContainer}>
                                    <img className={styles.currentSolvencyFormulaImage} src={currentLiquidityFomula} alt="formula" />
                                </Box>
                                {chosenCompany && (
                                    <CurrentLiquidityCalculator companyId={chosenCompany.id} />
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled={!chosenCompany}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography paragraph className={styles.primaryText}>Коэффициент покрытия активов</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={styles.definitionContainer}>
                                <Typography paragraph className={styles.primaryText}>Мы предлагаем вам рассчитать коэффициент покрытия активов вашего предприятия. Для этого необходимо ввести входные данные ниже. После расчёта, на экран будет выведен <span className={styles.highlightedText}>результат</span> расчёта, сформирован <span className={styles.highlightedText}>вывод</span> на основе полученного результата, а сама операция будет записана в таблицу на странице <Link to="/reports" className={styles.highlightedText}>"Отчётность"</Link> </Typography>
                                <Typography paragraph className={styles.primaryText}>Позволит понять, какую часть краткосрочных обязательств можно погасить с помощью всех имеющихся активов. Формула та же, что и для коэффициента общей платёжеспособности.</Typography>
                                <Typography paragraph className={styles.primaryText}>Этот показатель нужно смотреть в сравнении со средним по отрасли и в динамике, потому что норма разнится для разных сфер. Например, для сферы услуг нормой будет 1,5, а для промышленности ― 2.</Typography>
                            </Box>
                            <Box className={styles.formulaSectionWrapper}>
                                <Box className={styles.formulaContainer}>
                                    <img className={styles.currentSolvencyFormulaImage} src={assetsCoverageFormula} alt="formula" />
                                </Box>
                                {chosenCompany && (
                                    <AssetsCoverageCalculator companyId={chosenCompany.id} />
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </section>
            </Box>
        </div>
    );
};

export default CalculationPage;
