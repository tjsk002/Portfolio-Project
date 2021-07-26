export class ProjectModel {
    companyProject: any;
    personalProject: any;

    constructor(project: any = {}) {
        this.companyProject = [];
        this.personalProject = [];
    }
}
