import usePc from "@/utils/hooks/usePc";
import { OnSelectedData } from "@douyinfe/semi-ui/lib/es/navigation";
import { history, useLocation } from "@umijs/max";
import { useLocalStorageState } from "ahooks";
import { useEffect, useMemo } from "react";

export default () => {
  const { pathname } = useLocation();
  const isPc = usePc();
  const [ dark, setDark ] = useLocalStorageState('theme-mode', { defaultValue: true });
  const menyKey = useMemo(() => {
    return pathname.split('/')[1] || '';
  }, [pathname]);

  const handleMenuSelect = ({ itemKey }: OnSelectedData) => {
    history.replace(`/${itemKey}`);
  }
  const handleDarkModeChange = () => {
    const body = document.body;
    if (!body.hasAttribute('theme-mode')) {
      body.setAttribute('theme-mode', 'dark');
      setDark(true);
    } else {
      body.removeAttribute('theme-mode');
      setDark(false);
    }
  }
  useEffect(() => {
    const body = document.body;
    if (!body.hasAttribute('theme-mode') && dark) {
      body.setAttribute('theme-mode', 'dark');
    } else if (body.hasAttribute('theme-mode') && !dark) {
      body.removeAttribute('theme-mode');
    }
  }, [])
  return {
    menyKey,
    isDark: dark,
    handleMenuSelect,
    handleDarkModeChange,
    isPc,
  };
}