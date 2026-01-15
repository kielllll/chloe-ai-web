export interface FeatureFlags {
	SaveConversation: boolean;
	[key: string]: boolean;
}

export const featureFlags = {
	/**
	 * Check if a feature flag is enabled
	 * @param flagName - The name of the feature flag (without VITE_FF_ prefix)
	 * @returns boolean - true if the flag is enabled, false otherwise
	 */
	isEnabled(flagName: string): boolean {
		const envVarName = `VITE_FF_${flagName.toUpperCase()}`;
		const envValue = import.meta.env[envVarName];
		return envValue === "true";
	},

	/**
	 * Get all feature flags from environment
	 * @returns Record<string, boolean> - All feature flags with their boolean values
	 */
	getAllFlags(): Record<string, boolean> {
		const flags: Record<string, boolean> = {};

		Object.keys(import.meta.env).forEach((key) => {
			if (key.startsWith("VITE_FF_")) {
				const flagName = key.replace("VITE_FF_", "");
				const envValue = import.meta.env[key];
				flags[flagName] = envValue === "true";
			}
		});

		return flags;
	},

	/**
	 * Check if the current environment is development
	 * @returns boolean - true if in development mode
	 */
	isDevelopment(): boolean {
		return import.meta.env.DEV;
	},

	/**
	 * Check if the current environment is production
	 * @returns boolean - true if in production mode
	 */
	isProduction(): boolean {
		return import.meta.env.PROD;
	},
};

// Type-safe feature flag definitions
export const FLAG_NAMES = {
	SAVE_CONVERSATION: "SaveConversation",
} as const;

export type FlagName = (typeof FLAG_NAMES)[keyof typeof FLAG_NAMES];
