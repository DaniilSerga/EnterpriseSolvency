import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ChooseExistingCompanyInput.module.scss';
import { CompaniesEffects } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Company } from 'types';
import { reset } from 'store/slices/CompaniesSlice';

interface ChooseCompanyInputProps {
    isCompanySet: boolean;
    setChosenCompany: (company: Company | null) => void;
}

const ChooseExistingCompanyInput: FC<ChooseCompanyInputProps> = ({isCompanySet, setChosenCompany}) => {
    const dispatch = useAppDispatch();
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const companies = useAppSelector(state => state.companiesReducer.companies);
    const detailedCompany = useAppSelector(state => state.companiesReducer.detailedCompany);

    const fetchCompanies = async () => {
        await dispatch(CompaniesEffects.getCompanies());
    };  

    const checkCompany = async (value: string | null) => {
        if (!value) {
            return;
        }

        const chosenCompany = companies.find(company => company.name === value)!;
        await dispatch(CompaniesEffects.getCompany(chosenCompany.id));
    };

    const deleteCompany = async () => {
        const chosenCompany = companies.find(company => company.name === selectedCompany)!;
        await dispatch(CompaniesEffects.deleteCompany(chosenCompany.id));
        setChosenCompany(null);
        setSelectedCompany(null);
        reset();
    };

    useEffect(() => {
        setChosenCompany(detailedCompany);
    }, [detailedCompany]);

    useEffect(() => {
        fetchCompanies();    
    }, []);

    return (
        <Box className={styles.companyChooseContainer}>
            <Box className={styles.inputContainer}>
                <Autocomplete 
                    value={selectedCompany} 
                    onInputChange={(_, value) => {
                        setSelectedCompany(value!);
                        isCompanySet && setChosenCompany(null); 
                    }}
                    selectOnFocus
                    onChange={(_, value) => checkCompany(value)}
                    noOptionsText="Ничего не найдено - создайте новую компанию"
                    options={companies.map(company => company.name)}
                    renderInput={(params) => 
                        <TextField {...params} placeholder='Выберите компанию или введите название собственной' label='Компания' />
                    } />
                <Button size='medium' variant='outlined' onClick={deleteCompany} disabled={!isCompanySet}>
                    <Typography>Удалить</Typography>
                    <CloseIcon />
                </Button>
            </Box>
            {/* <Button variant='contained' className={styles.submitButton} onClick={checkCompany}>Подтвердить</Button> */}
        </Box>
    );
};

export default ChooseExistingCompanyInput;
