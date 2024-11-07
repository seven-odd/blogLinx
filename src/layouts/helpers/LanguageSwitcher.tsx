import config from "@/config/config.json";
import languages from "@/config/language.json";
import React, { useEffect, useState } from "react";

const LanguageSwitcher = ({
  lang,
  pathname,
}: {
  lang: string;
  pathname: string;
}) => {
  const { default_language, default_language_in_subdir } = config.settings;
  
  const [selectedLang, setSelectedLang] = useState(lang);

  // 移除尾随斜杠（如果不需要）
  const removeTrailingSlash = (path: string) => {
    return config.site.trailing_slash ? path : path.replace(/\/$/, "");
  };

  // 排序并过滤语言
  const sortedLanguages = languages
    .filter((language) => !config.settings.disable_languages.includes(language.languageCode))
    .sort((a, b) => a.weight - b.weight);

  // 处理语言切换
  const handleLanguageChange = (newLang: string) => {
    if (typeof window !== "undefined") {
      const baseUrl = window.location.origin;
      
      // 更新当前选择的语言
      setSelectedLang(newLang);

      // 去除当前语言路径并确保保留 base 路径
      let newPath = pathname.replace(`/${lang}`, ""); 
      newPath = newPath.startsWith("/blogLinx") ? newPath : `/blogLinx${newPath}`;
      
      if (newLang === default_language && !default_language_in_subdir) {
        // 对于默认语言且不在子目录时
        newPath = removeTrailingSlash(newPath);
      } else {
        // 将语言代码插入到 base 路径之后
        newPath = `/blogLinx/${newLang}${removeTrailingSlash(newPath.replace("/blogLinx", ""))}`;
      }

      window.location.href = `${baseUrl}${newPath}`;
    }
  };

  useEffect(() => {
    // 更新语言时重新设置下拉框的值
    setSelectedLang(lang);
  }, [lang]);

  return (
    <div className={`mr-5 ${sortedLanguages.length > 1 ? "block" : "hidden"}`}>
      <select
        className="border border-dark text-dark bg-transparent dark:border-darkmode-primary dark:text-white py-1 rounded-sm cursor-pointer focus:ring-0 focus:border-dark dark:focus:border-darkmode-primary"
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={selectedLang} // 确保下拉框绑定选中的语言
      >
        {sortedLanguages.map((language) => (
          <option
            className="dark:text-dark"
            key={language.languageCode}
            value={language.languageCode}
          >
            {language.languageName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
