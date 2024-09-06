import { apiClient, base_url } from "../api/apiClient";

const endpoints = {
    getAll: `${base_url}/permissions/`,
    create: `${base_url}/permissions/`,
    update: (permissionId: string) => `${base_url}/permissions/${permissionId}/`,
    delete: (permissionId: string) => `${base_url}/permissions/${permissionId}/`,
    show: (permissionId: string) => `${base_url}/permissions/${permissionId}/`,
};

export async function getAllPermissions() {
    try {
        const response = await apiClient.get(endpoints.getAll);
        return response.data; 
    } catch (error) {
        console.error('Error fetching permissions:', error);
        throw error; 
    }
}

export async function createPermission(permissionData: any) {
    try {
        const response = await apiClient.post(endpoints.create, permissionData);
        return response.data;
    } catch (error) {
        console.error('Error creating permission:', error);
        throw error; 
    }
}

export async function readPermission(permissionId: string) {
    try {
        const response = await apiClient.get(endpoints.show(permissionId));
        return response.data; 
    } catch (error) {
        console.error('Error fetching permission by ID:', error);
        throw error; 
    }
}

export async function updatePermission(permissionId: string, permissionData: any) {
    try {
        const response = await apiClient.patch(endpoints.update(permissionId), permissionData);
        return response.data;
    } catch (error) {
        console.error('Error updating permission:', error);
        throw error; 
    }
}

export async function deletePermission(permissionId: string) {
    try {
        const response = await apiClient.delete(endpoints.delete(permissionId));
        return response.data; 
    } catch (error) {
        console.error('Error deleting permission:', error);
        throw error; 
    }
}
