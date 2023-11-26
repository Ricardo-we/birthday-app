export const languageCodesToCountrie: any = {
	es: "es",
	en: "us",
};

export function getValidLocaleByLanguageCode(langCode: string) {
	return languageCodesToCountrie?.[langCode] ?? languageCodesToCountrie["es"];
}
