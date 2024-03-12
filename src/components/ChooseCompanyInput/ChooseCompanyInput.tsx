import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import React, {FC, useEffect, useState} from 'react';
import { CompaniesEffects } from 'store/slices/CompaniesSlice';
import { Company } from 'types';

import styles from './ChooseCompanyInput.module.scss';

interface ChooseCompanyInputProps {
    isCompanySet: boolean;
    setChosenCompany: (company: Company | null) => void;
}

const ChooseCompanyInput: FC<ChooseCompanyInputProps> = ({setChosenCompany, isCompanySet}) => {
    const dispatch = useAppDispatch();
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const companies = useAppSelector(state => state.companiesReducer.companies);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCompanies = async () => {
        await dispatch(CompaniesEffects.getCompanies());
    };

    const createCompany = async () => {
        setIsLoading(true);
        await dispatch(CompaniesEffects.createCompany(selectedCompany!));
        await fetchCompanies();
    }

    const setCompany = (companyName: string) => {
        setChosenCompany(companies.find(company => company.name === companyName)!);
    };

    useEffect(() => {
        fetchCompanies();
    }, []);
    
    useEffect(() => {
        if (!isLoading) {
            return;
        }

        console.log('CALL');
        const storedCompany = companies.find((company) => company.name === selectedCompany);
        setChosenCompany(storedCompany!);
        setIsLoading(false);
    }, [companies]);

    return (
        <Box className={styles.companyChooseContainer}>
            <Autocomplete 
                value={selectedCompany} 
                freeSolo 
                onInputChange={(_, value) => {
                    setSelectedCompany(value!);
                    isCompanySet && setChosenCompany(null); 
                }}
                selectOnFocus
                noOptionsText="Ничего не найдено - создайте новую компанию"
                options={companies.map(company => company.name)} 
                onChange={(_, value) => setCompany(value!)}
                renderInput={(params) => <TextField {...params} placeholder='Выберите компанию или введите название собственной' label='Компания' />} />
            <Button 
                variant='contained' 
                className={styles.submitButton} 
                onClick={() => createCompany()} 
                disabled={companies.some(company => company.name === selectedCompany) || !selectedCompany}>
                    Создать
            </Button>
        </Box>
    );
};

export default ChooseCompanyInput;
