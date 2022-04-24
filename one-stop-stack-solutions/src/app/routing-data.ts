import { AdminDashboardComponent } from "./admin-module/admin-dashboard/admin-dashboard.component";
import { DashboardComponent } from "./angular-module/dashboard/dashboard.component";
import { LinuxDashboardComponent } from "./basic-linux-module/linux-dashboard/linux-dashboard.component";
import { BlogsDashboardComponent } from "./blogs-module/blogs-dashboard/blogs-dashboard.component";
import { CloneProjectsDashboardComponent } from "./clone-projects-module/clone-projects-dashboard/clone-projects-dashboard.component";
import { CloudServicesDashboardComponent } from "./cloud-services-module/cloud-services-dashboard/cloud-services-dashboard.component";
import { CommunityForumDashboardComponent } from "./community-forum-module/community-forum-dashboard/community-forum-dashboard.component";
import { CssprojectsDashboardComponent } from "./cssprojects-module/cssprojects-dashboard/cssprojects-dashboard.component";
import { LandingPageComponent } from "./dashboard/landing-page/landing-page.component";
import { DatastructureHacksDashboardComponent } from "./datastructure-hacks-module/datastructure-hacks-dashboard/datastructure-hacks-dashboard.component";
import { DeeplearningTipsDashboardComponent } from "./deeplearning-tips-module/deeplearning-tips-dashboard/deeplearning-tips-dashboard.component";
import { DevopsDashboardComponent } from "./devops-module/devops-dashboard/devops-dashboard.component";
import { DjandoDashboardComponent } from "./djando-module/djando-dashboard/djando-dashboard.component";
import { ExpressDashboardComponent } from "./express-module/express-dashboard/express-dashboard.component";
import { FlaskTipsDashboardComponent } from "./flask-tips-module/flask-tips-dashboard/flask-tips-dashboard.component";
import { FrontEndHacksDashboardComponent } from "./front-end-hacks-module/front-end-hacks-dashboard/front-end-hacks-dashboard.component";
import { GadgetsInfoDashboardComponent } from "./gadgets-info-module/gadgets-info-dashboard/gadgets-info-dashboard.component";
import { GeneralDoubtsDashboardComponent } from "./general-doubts-module/general-doubts-dashboard/general-doubts-dashboard.component";
import { GitHacksDashboardComponent } from "./git-hacks-module/git-hacks-dashboard/git-hacks-dashboard.component";
import { HowToDashboardComponent } from "./how-to-module/how-to-dashboard/how-to-dashboard.component";
import { InterviewPrepDashboardComponent } from "./interview-prep-module/interview-prep-dashboard/interview-prep-dashboard.component";
import { JavascriptTipsDashboardComponent } from "./javascript-tips-module/javascript-tips-dashboard/javascript-tips-dashboard.component";
import { LatestNotificationsDashboardComponent } from "./latest-notifications-module/latest-notifications-dashboard/latest-notifications-dashboard.component";
import { MiniProjectsAngularDashboardComponent } from "./mini-projects-angular-module/mini-projects-angular-dashboard/mini-projects-angular-dashboard.component";
import { MiniProjectsReactDashboardComponent } from "./mini-projects-react-module/mini-projects-react-dashboard/mini-projects-react-dashboard.component";
import { MiniProjectsThreejsDashboardComponent } from "./mini-projects-threejs-module/mini-projects-threejs-dashboard/mini-projects-threejs-dashboard.component";
import { MiniProjectsVueDashboardComponent } from "./mini-projects-vue-module/mini-projects-vue-dashboard/mini-projects-vue-dashboard.component";
import { MongoTipsDashboardComponent } from "./mongo-tips-module/mongo-tips-dashboard/mongo-tips-dashboard.component";
import { NumpyDashboardComponent } from "./numpy-module/numpy-dashboard/numpy-dashboard.component";
import { OpencvDashboardComponent } from "./opencv-module/opencv-dashboard/opencv-dashboard.component";
import { PandasDashboardComponent } from "./pandas-module/pandas-dashboard/pandas-dashboard.component";
import { PythonProjectsDashboardComponent } from "./python-projects-module/python-projects-dashboard/python-projects-dashboard.component";
import { PythonTipsDashboardComponent } from "./python-tips-module/python-tips-dashboard/python-tips-dashboard.component";
import { ReactDashboardComponent } from "./react-module/react-dashboard/react-dashboard.component";
import { ResourcesDashboardComponent } from "./resources-module/resources-dashboard/resources-dashboard.component";
import { SqlTipsDashboardComponent } from "./sql-tips-module/sql-tips-dashboard/sql-tips-dashboard.component";
import { TextEditorsDashboardComponent } from "./text-editors-module/text-editors-dashboard/text-editors-dashboard.component";
import { ThreejsDashboardComponent } from "./threejs-module/threejs-dashboard/threejs-dashboard.component";
import { VueDashboardComponent } from "./vue-module/vue-dashboard/vue-dashboard.component";

export const route_paths = [
    {path:"", component:LandingPageComponent},
    {path:"admin", component:AdminDashboardComponent},
    {path:"angular", component:DashboardComponent},
    {path:"reactjs", component:ReactDashboardComponent},
    {path:"threejs", component:ThreejsDashboardComponent},
    {path:"vuejs", component:VueDashboardComponent},
    {path:"basic-linux", component:LinuxDashboardComponent},
    {path:"blogs", component:BlogsDashboardComponent},
    {path:"clone-projects", component:CloneProjectsDashboardComponent},
    {path:"cloud-services", component:CloudServicesDashboardComponent},
    {path:"community-forum", component:CommunityForumDashboardComponent},
    {path:"cssprojects", component:CssprojectsDashboardComponent},
    {path:"datastructures", component:DatastructureHacksDashboardComponent},
    {path:"deeplearning", component:DeeplearningTipsDashboardComponent},
    {path:"devops", component:DevopsDashboardComponent},
    {path:"django", component:DjandoDashboardComponent},
    {path:"expressjs", component:ExpressDashboardComponent},
    {path:"flask", component:FlaskTipsDashboardComponent},
    {path:"front-end-hacks", component:FrontEndHacksDashboardComponent},
    {path:"gadgets", component:GadgetsInfoDashboardComponent},
    {path:"generalknowledge", component:GeneralDoubtsDashboardComponent},
    {path:"git-hacks", component:GitHacksDashboardComponent},
    {path:"how-to", component:HowToDashboardComponent},
    {path:"interview-preparation", component:InterviewPrepDashboardComponent},
    {path:"javascript-tips", component:JavascriptTipsDashboardComponent},
    {path:"notifications", component:LatestNotificationsDashboardComponent},
    {path:"angular-projects", component:MiniProjectsAngularDashboardComponent},
    {path:"reactjs-projects", component:MiniProjectsReactDashboardComponent},
    {path:"threejs-projects", component:MiniProjectsThreejsDashboardComponent},
    {path:"vuejs-projects", component:MiniProjectsVueDashboardComponent},
    {path:"mongo-tips", component:MongoTipsDashboardComponent},
    {path:"numpy-tips", component:NumpyDashboardComponent},
    {path:"opencv", component:OpencvDashboardComponent},
    {path:"pandas-tips", component:PandasDashboardComponent},
    {path:"resources", component:ResourcesDashboardComponent},
    {path:"mysql-tips", component:SqlTipsDashboardComponent},
    {path:"text-editors", component:TextEditorsDashboardComponent},
    {path:"python-projects", component:PythonProjectsDashboardComponent},
    {path:"python-tips", component:PythonTipsDashboardComponent}
]