export const ApiRoutes = {
    api: {
        baseUrl: "http://localhost:8000/kings/coreapis/school/api/v1/",
        user: {
            login: "appLogin",
            logout: "appLogout",
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
        classroom: {
            add: "addClassroom",
            edit: "editClassroom",
            retrieve: "getClassrooms",
            retrieveSingle: "getSingleClassroom",
            delete: "deleteClassroom",
        },
        role: {
            add: "addRole",
            edit: "editRole",
            retrieve: "getRoles",
            retrieveSingle: "getSingleRole",
            delete: "deleteRole",
        },
        group: {
            add: "addGroup",
            edit: "editGroup",
            retrieve: "getGroups",
            retrieveSingle: "getSingleGroup",
            delete: "deleteGroup",
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
            assign:"assignPermission",
            remove:"removePermission",
        }
    },
    dashboard: {
        login: "",
        home: "dashboard",
        classrooms: "classrooms",
        teachers: "teachers",
        learners: "learners",
        // learners: "learners"
    }
}