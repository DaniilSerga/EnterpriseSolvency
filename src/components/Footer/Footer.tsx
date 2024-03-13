import React, {FC} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './Footer.module.scss';
import { Box, Typography } from '@mui/material';

const Footer: FC = () => {
    return (
        <footer className={styles.footerContainer}>
            <Typography className={styles.primaryText}>Серга Даниил</Typography>
            <Box>
                <a href="https://github.com/DaniilSerga/EnterpriseSolvency">
                    <GitHubIcon sx={{width: 28, height: 28}} />
                </a>
                <Typography className={styles.primaryText}>2024</Typography>
            </Box>
        </footer>
    );
};

export default Footer;
