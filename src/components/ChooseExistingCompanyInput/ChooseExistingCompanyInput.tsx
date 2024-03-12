import { Autocomplete, Box, Button, TextField } from '@mui/material';
import React, {FC, useEffect, useState} from 'react';

import styles from './ChooseExistingCompanyInput.module.scss';
import { CompaniesEffects } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Company } from 'types';

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

    const checkCompany = async () => {
        const chosenCompany = companies.find(company => company.name === selectedCompany)!;
        await dispatch(CompaniesEffects.getCompany(chosenCompany.id));
        // setChosenCompany(detailedCompany);
    }

    useEffect(() => {
        setChosenCompany(detailedCompany);
    }, [detailedCompany]);

    useEffect(() => {
        fetchCompanies();    
    }, []);

    return (
        <Box className={styles.companyChooseContainer}>
            <Autocomplete 
                value={selectedCompany} 
                onInputChange={(_, value) => {
                    setSelectedCompany(value!);
                    isCompanySet && setChosenCompany(null); 
                }} 
                noOptionsText="Ничего не найдено - создайте новую компанию"
                options={companies.map(company => company.name)}
                renderInput={(params) => <TextField {...params} placeholder='Выберите компанию или введите название собственной' label='Компания' />} />
            <Button variant='contained' className={styles.submitButton} onClick={checkCompany}>Подтвердить</Button>
        </Box>
    );
};

export default ChooseExistingCompanyInput;
