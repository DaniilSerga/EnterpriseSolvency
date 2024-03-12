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

    const fetchCompanies = async () => {
        await dispatch(CompaniesEffects.getCompanies());
    };  

    const checkCompany = async () => {
        if (!companies.find(company => company.name === selectedCompany)) {
            await dispatch(CompaniesEffects.createCompany(selectedCompany!))
            await fetchCompanies().then(() => {
                const storedCompany = companies.find((company) => company.name === selectedCompany);
                console.log(storedCompany);
                setChosenCompany(storedCompany!);
            });
        } else {
            setChosenCompany(companies.find(company => company.name === selectedCompany)!);
        }
    }

    useEffect(() => {
        fetchCompanies();    
    }, []);

    return (
        <Box className={styles.companyChooseContainer}>
            <Autocomplete 
                value={selectedCompany} 
                freeSolo 
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

export default ChooseCompanyInput;
