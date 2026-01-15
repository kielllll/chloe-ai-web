import { featureFlags } from "./feature-flags";
import { useState, useEffect } from "react";

/**
 * React hook for accessing feature flags
 * @returns Object with feature flag utilities
 */
export function useFeatureFlags() {
	const [flags, setFlags] = useState<Record<string, boolean>>({});

	useEffect(() => {
		// Update flags when environment variables change
		setFlags(featureFlags.getAllFlags());
	}, []);

	return {
		isEnabled: featureFlags.isEnabled,
		getAllFlags: () => flags,
		isDevelopment: featureFlags.isDevelopment,
		isProduction: featureFlags.isProduction,
		flags,
	};
}
