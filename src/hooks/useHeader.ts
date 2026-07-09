import { useRef, useState, useCallback } from 'react';
import { useTranslation } from '../i18n';
import { useTheme } from './useTheme';
import { useTabs } from './useTabs';
import { useClickOutside } from './useClickOutside';
import type { Theme } from '../types';

export function useHeader() {
    const { t, lang, setLang } = useTranslation();
    const { theme, ThemeIcon, themeOptions, setTheme } = useTheme();
    const { tabs } = useTabs();

    const [themeMenuOpen, setThemeMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside(menuRef, () => setThemeMenuOpen(false));

    const onToggleLang = useCallback(() => {
        setLang(lang === 'ru' ? 'en' : 'ru');
    }, [lang, setLang]);

    const onToggleThemeMenu = useCallback(() => {
        setThemeMenuOpen(prev => !prev);
    }, []);

    const onSelectTheme = useCallback((newTheme: Theme) => {
        setTheme(newTheme);
        setThemeMenuOpen(false);
    }, [setTheme]);

    return {
        theme,
        themeMenuOpen,
        menuRef,
        tabs,
        themeOptions,
        ThemeIcon,
        t,
        lang,
        onToggleLang,
        onToggleThemeMenu,
        onSelectTheme,
    };
}