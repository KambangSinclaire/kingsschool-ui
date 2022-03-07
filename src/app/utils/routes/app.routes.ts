const crud = {
    add: "add",
    edit: "edit",
    details: "details",
}
export const ApiRoutes = {
    api: {
        baseUrl: "http://localhost:8000/kings/coreapis/school/api/v1/",
        user: {
            login: "appLogin",
            logout: "appLogout",
            add: "appRegister",
            edit: "editUser",
            retrieveSingle: "getSingleUser",
            retrieve: "getUsers",
            delete: "deleteUser",
        },
        learner: {
            add: "addLearner",
            edit: "editLearner",
            retrieve: "getLearners",
            retrieveSingle: "getSingleLearner",
            delete: "deleteLearner",
        },
        teacher: {
            add: "addTeacher",
            edit: "editTeacher",
            retrieve: "getTeachers",
            retrieveSingle: "getSingleTeacher",
            delete: "deleteTeacher",
        },
        academicYear: {
            add: "addAcademicYear",
            edit: "editAcademicYear",
            retrieve: "getAcademicYears",
            retrieveSingle: "getSingleAcademicYear",
            delete: "deleteAcademicYear",
        },
        academicLevel: {
            add: "addAcademicLevel",
            edit: "editAcademicLevel",
            retrieve: "getAcademicLevels",
            retrieveSingle: "getSingleAcademicLevel",
            delete: "deleteAcademicLevel",
        },
        assignment: {
            add: "addAssignment",
            edit: "editAssignment",
            retrieve: "getAssignments",
            retrieveSingle: "getSingleAssignment",
            delete: "deleteAssignment",
        },
        exam: {
            add: "addExam",
            edit: "editExam",
            retrieve: "getExams",
            retrieveSingle: "getSingleExam",
            delete: "deleteExam",
        },
        course: {
            add: "addCourse",
            edit: "editCourse",
            retrieve: "getCourses",
            retrieveSingle: "getSingleCourse",
            delete: "deleteCourse",
        },
        classroom: {
            add: "addClassroom",
            edit: "editClassroom",
            retrieve: "getClassrooms",
            retrieveSingle: "getSingleClassroom",
            delete: "deleteClassroom",
        },
        activity: {
            add: "addActivity",
            edit: "editActivity",
            retrieve: "getActivities",
            retrieveSingle: "getSingleActivity",
            delete: "deleteActivity",
        },
        task: {
            add: "addTask",
            edit: "editTask",
            retrieve: "getTasks",
            retrieveSingle: "getSingleTask",
            delete: "deleteTask",
        },
        timeTable: {
            add: "addTimeTable",
            edit: "editTimeTable",
            retrieve: "getTimeTables",
            retrieveSingle: "getSingleTimeTable",
            delete: "deleteTimeTable",
        },
        project: {
            add: "addProject",
            edit: "editProject",
            retrieve: "getProjects",
            retrieveSingle: "getSingleProject",
            delete: "deleteProject",
        },
        role: {
            add: "addRole",
            edit: "editRole",
            retrieve: "getRoles",
            retrieveSingle: "getSingleRole",
            delete: "deleteRole",
        },
        department: {
            add: "addDepartment",
            edit: "editDepartment",
            retrieve: "getDepartments",
            retrieveSingle: "getSingleDepartment",
            delete: "deleteDepartment",
        },
        notification: {
            sendSMS: "sendSmsNotification",
            sendEmail: "sendEmailNotification",
            sendPush: "sendPushNotification"
        },
        preference: {
            add: "addPreference",
            edit: "editPreference",
            retrieve: "getPreferences",
            retrieveSingle: "getSinglePreference",
            delete: "deletePreference",
        },
        resource: {
            add: "addResource",
            edit: "editResource",
            retrieve: "getResources",
            retrieveSingle: "getSingleResource",
            delete: "deleteResource",
        },
        permission: {
            add: "addPermission",
            edit: "editPermission",
            retrieve: "getPermissions",
            retrieveSingle: "getSinglePermission",
            delete: "deletePermission",
            all: "permissions",
            assign: "assignPermission",
            remove: "removePermission",
        }
    },
    dashboard: {
        login: "",
        home: "dashboard",
        classroom: {
            all: "classrooms",
            crud
        },
        teacher: {
            all: "teachers",
            crud
        },
        learner: {
            all: "learners",
            crud
        },
        resource: {
            all: "resources",
            crud
        },
        profile: "profile",
        explore: "explore",
        "academic-year": {
            all: "academic-years",
            crud
        },
        "academic-level": {
            all: "academic-levels",
            crud
        },
        exam: {
            all: "exams",
            crud
        },
        transaction: {
            all: "transactions",
            crud
        },
        project: {
            all: "projects",
            crud
        },
        task: {
            all: "tasks",
            crud
        },
        activity: {
            all: "activities",
            crud
        },
        admins: "admins"
    }
}