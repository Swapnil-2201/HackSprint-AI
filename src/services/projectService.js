import api from "./api";

const projectService = {
  // Get all projects
  async getProjects(params = {}) {
    const { data } = await api.get("/projects", {
      params,
    });

    return data;
  },

  // Get single project
  async getProjectById(projectId) {
    const { data } = await api.get(`/projects/${projectId}`);

    return data;
  },

  // Create new project
  async createProject(projectData) {
    const { data } = await api.post(
      "/projects",
      projectData
    );

    return data;
  },

  // Update project
  async updateProject(projectId, projectData) {
    const { data } = await api.put(
      `/projects/${projectId}`,
      projectData
    );

    return data;
  },

  // Delete project
  async deleteProject(projectId) {
    const { data } = await api.delete(
      `/projects/${projectId}`
    );

    return data;
  },

  // Duplicate project
  async duplicateProject(projectId) {
    const { data } = await api.post(
      `/projects/${projectId}/duplicate`
    );

    return data;
  },

  // Archive project
  async archiveProject(projectId) {
    const { data } = await api.patch(
      `/projects/${projectId}/archive`
    );

    return data;
  },

  // Restore archived project
  async restoreProject(projectId) {
    const { data } = await api.patch(
      `/projects/${projectId}/restore`
    );

    return data;
  },

  // Get project members
  async getProjectMembers(projectId) {
    const { data } = await api.get(
      `/projects/${projectId}/members`
    );

    return data;
  },

  // Add member
  async addProjectMember(projectId, payload) {
    const { data } = await api.post(
      `/projects/${projectId}/members`,
      payload
    );

    return data;
  },

  // Remove member
  async removeProjectMember(projectId, memberId) {
    const { data } = await api.delete(
      `/projects/${projectId}/members/${memberId}`
    );

    return data;
  },
};

export default projectService;