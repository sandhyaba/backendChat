import { create } from 'zustand';
import { fetchAssistantDetails } from './index';

const useAssistantStore = create((set) => ({
    assistantDetails: [],
    loading: false,
    error: null,

    // Fetch a single customer by ID
    fetchAssistantDetailsById: async (assistantId, token) => {
        set({ assistantDetails: [], loading: true, error: null });
        try {
            const response = await fetchAssistantDetails(assistantId, token);

            set({ assistantDetails: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));

export default useAssistantStore;
