const crud = {
    add: "add",
    edit: "edit",
    details: "details",
}
export const ApiRoutes = Object.freeze({
    api: {
        // host: "http://localhost:8080/",
        host: "http://ec2-3-145-15-29.us-east-2.compute.amazonaws.com/",
        get baseUrl() { return this.host + "kings/coreapis/school/api/v1/" },
        user: {
            login: "appLogin",
            logout: "appLogout",
            add: "appRegister",
            edit: "editUser",
            retrieveSingle: "getSingleUser",
            retrieve: "getUsers",
            delete: "deleteUser",
        },
        statistics: {
            all: "all-statistics",
            admin: "admin-statistics",
            staff: "staff-statistics",
            subAdmin: "subAdmin-statistics",
            owner: "owner-statistics",
            teacher: "teacher-statistics",
            learner: "learner-statistics"
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
        school: {
            add: "addSchool",
            edit: "editSchool",
            retrieve: "getSchools",
            retrieveSingle: "getSingleSchool",
            delete: "deleteSchool",
        },
        academicYear: {
            add: "addAcademicYear",
            edit: "editAcademicYear",
            retrieve: "getAcademicYears",
            retrieveSingle: "getSingleAcademicYear",
            delete: "deleteAcademicYear",
            setActiveYear: "setActiveYear"
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
        lecture: {
            add: "addLecture",
            edit: "editLecture",
            retrieve: "getLectures",
            retrieveSingle: "getSingleLecture",
            delete: "deleteLecture",
        },
        classroom: {
            add: "addClassroom",
            edit: "editClassroom",
            retrieve: "getClassrooms",
            retrieveSingle: "getSingleClassroom",
            delete: "deleteClassroom",
        },
        semester: {
            add: "addSemester",
            edit: "editSemester",
            retrieve: "getSemesters",
            retrieveSingle: "getSingleSemester",
            delete: "deleteSemester",
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
        fee: {
            add: "addFee",
            edit: "editFee",
            retrieve: "getFees",
            retrieveSingle: "getSingleFee",
            delete: "deleteFee",
        },
        notification: {
            sendSMS: "sendSMS",
            sendEmail: "sendEmail",
            pull: "pullPushNotification"
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
        },
        fileUpload: {
            multiple: "multiple-files",
            single: "file",
            files: "many-files",
            anyFiles: "any-files"
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
        course: {
            all: "courses",
            register: "register",
            crud
        },
        resource: {
            all: "resources",
            crud
        },
        lecture: {
            all: "lectures",
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
        fee: {
            all: "fees",
            crud
        },
        activity: {
            all: "activities",
            crud
        },
        admins: "admins",
        myClass: "my-classroom",
        myOffice: "my-office",
        inbox: "inbox"
    }
});