import { THEME_OPTIONS, getDefaultTheme, getThemeIcon } from '../utils/theme';
import type { Theme } from '../types';
import { useTranslation } from '../i18n';
import { useState, useCallback, useMemo } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface ThemeOptionWithLabel {
    value: Theme;
    label: string;
    icon: LucideIcon;
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getDefaultTheme);
    const { t } = useTranslation();

    const themeOptions: ThemeOptionWithLabel[] = useMemo(() => 
        THEME_OPTIONS.map(opt => ({
            ...opt,
            label: t(opt.labelKey),
        })),
    [t]);

    const ThemeIcon: LucideIcon = useMemo(() => getThemeIcon(theme), [theme]);

    const changeTheme = useCallback((newTheme: Theme) => {
        setTheme(newTheme);
        localStorage.setItem('eds_theme', newTheme);
    }, []);

    return {
        theme,
        ThemeIcon,
        themeOptions,
        setTheme: changeTheme,
    };
}