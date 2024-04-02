import { useState   , useEffect } from "react"; 
import Sidebar  from "../Sidebar" ;   
import {Link , useNavigate  , useLocation} from "react-router-dom" ; 
import axios from "axios"  ;  




function PrivacyPolicyAndTC() {    
    
    
    const location = useLocation();

    const [  screenType , setScreenType ]   = useState( location.state.screenType   ) ;  





    if(  location.state.screenType === "privacyPolicy"){

    

    return( 
        <div style={{backgroundColor : "#F7E5E9"}}>
           <h2 style={{ marginLeft : "4px" , marginBottom : "2px" }}>Privacy Policy:</h2>
           <p style={{ marginLeft : "50px" , marginRight : "50px"}} >Personal data (hereinafter mostly referred to as “data”) is only processed by
us to the extent necessary and for the purpose of providing a functional and
user-friendly website, including its content and the services offered there.
According to Article 4(1) of Regulation (EU) 2016/679, i.e. the General Data
Protection Regulation (hereinafter referred to as “GDPR”), “processing”
means any operation or set of operations which is performed on personal
data or on sets of personal data, whether or not by automated means, such
as collection, recording, organisation, structuring, storage, adaptation or
alteration, retrieval, consultation, use, disclosure by transmission,
dissemination or otherwise making available, alignment or combination,
restriction, erasure or destruction.
With the following data protection declaration, we inform you in particular
about the type, scope, purpose, duration and legal basis of the processing
of personal data, insofar as we decide either alone or together with others
on the purposes and means of processing. In addition, we inform you below
about the third-party components we use for optimisation purposes and to
increase the quality of use, insofar as third parties process data on their
own responsibility.
Our privacy policy is structured as follows
Information about us as the controller
Rights of users and data subjects
Information on data processing</p>
<br />
<h3  style={{ marginLeft : "30px" ,  marginBottom : "2px"  }} >1. Information about us as the controller:</h3>
<p style={{ marginLeft : "70px"  ,  marginRight : "50px" }} >The responsible provider of this website in terms of data protection law is
Soceo gGmbH
Max-Eyth-Straße 21
72622 Nürtingen
Nuertingen, Germany
E-mail: info@soceo.de
</p>
<br />
<h3 style={{ marginLeft : "30px" ,  marginBottom : "2px"  }}>2. Rights of users and data subjects:</h3>
<p style={{ marginLeft : "70px"  ,  marginRight : "50px" }}>With regard to the data processing described in more detail below, users
and data subjects have the right to confirmation as to whether data
concerning them is being processed, to information about the processed
data, to further information about the data processing and to copies of the

data (cf. also Art. 15 GDPR) to rectification or completion of incorrect or
incomplete data (see also Art. 16 GDPR);
the immediate erasure of the data concerning them (see also Art. 17
GDPR) or, alternatively, if further processing is required in accordance with
Art. 17 para. 3 GDPR, the restriction of processing in accordance with Art.
18 GDPR; to receive the data concerning them and provided by them and
to transfer this data to other providers/controllers (cf. also Art. 20 GDPR) to
lodge a complaint with the supervisory authority if they are of the opinion
that the data concerning them is being processed by the provider in breach
of data protection regulations (cf. also Art. 77 GDPR).
In addition, the provider is obliged to inform all recipients to whom data has
been disclosed by the provider of any rectification or erasure of data or
restriction of processing carried out on the basis of Articles 16, 17 (1), 18
GDPR. However, this obligation does not apply if this notification is
impossible or involves a disproportionate effort. Notwithstanding this, the
user has a right to information about these recipients.
Users and data subjects also have the right to object to the future
processing of data concerning them in accordance with Art. 21 GDPR,
provided that the data is processed by the provider in accordance with Art.
6 para. 1 lit. f) GDPR. In particular, an objection to data processing for the
purpose of direct advertising is admissible.</p>
<br />
<h3 style={{ marginLeft : "30px" ,  marginBottom : "2px"  }}>3. Information on data processing:</h3>
<p  style={{ marginLeft : "70px"  ,  marginRight : "50px"  }}>Your data processed when using our website will be deleted or blocked as
soon as the purpose of storage no longer applies, the deletion of the data
does not conflict with any statutory storage obligations and no other
information is provided below on individual processing procedures.</p>
<br />
<h3 style={{ marginLeft : "30px"  , marginBottom : "2px" }}>Server data:</h3>
<p style={{ marginLeft : "70px" , marginRight : "50px"}}>For technical reasons, in particular to ensure a secure and stable Internet
presence, data is transmitted to us or to our web space provider by your
Internet browser. These so-called server log files are used to collect data
such as the type and version of your Internet browser, the operating
system, the website from which you accessed our website (referrer URL),
the website(s) of our website that you visit, the date and time of the
respective access and the IP address of the Internet connection from which
our website is used.
The data collected in this way is stored temporarily, but not together with
other data about you.
This storage takes place on the legal basis of Art. 6 para. 1 lit. f) GDPR.
Our legitimate interest lies in the improvement, stability, functionality and
security of our website.
The data will be deleted after seven days at the latest, unless further
storage is required for evidence purposes. Otherwise, the data is excluded
from deletion in whole or in part until an incident has been finally clarified.
</p>
<br />
<h3 style={{ marginLeft : "30px" , marginBottom : "2px" }}>Cookies:</h3>
<p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }}>a) Session cookies/session cookies
We use so-called cookies on our website. Cookies are small text files or
other storage technologies that are placed and stored on your end device
by the Internet browser you use. These cookies are used to process certain
information from you, such as your browser or location data or your IP
address, on an individual basis.
This processing makes our website more user-friendly, effective and
secure, as the processing enables, for example, the reproduction of our
website in different languages or the offer of a shopping basket function.
The legal basis for this processing is Art. 6 para. 1 lit. b) GDPR, insofar as
these cookies process data for contract initiation or contract fulfilment.
If the processing does not serve to initiate or fulfil a contract, our legitimate
interest lies in improving the functionality of our website. The legal basis in
this case is Art. 6 para. 1 lit. f) GDPR.
These session cookies are deleted when you close your Internet browser.</p>
<p style={{ marginLeft : "70px" , marginRight : "50px" , marginBottom : "20px"}}>b) Third-party cookies
Our website may also use cookies from partner companies with whom we
work for the purposes of advertising, analysing or the functionalities of our
website.
Please refer to the following information for details, in particular the
purposes and legal basis for processing such third-party cookies.</p>
<p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px"}}>
c) You can prevent or restrict the installation of cookies by changing the
settings in your Internet browser. You can also delete cookies that have
already been saved at any time. However, the steps and measures required
for this depend on the specific Internet browser you are using. If you have
any questions, please use the help function or documentation of your

Internet browser or contact its manufacturer or support. In the case of so-
called Flash cookies, however, processing cannot be prevented via the
browser settings. Instead, you must change the settings of your Flash
player. The steps and measures required for this also depend on the
specific Flash player you are using. If you have any questions, please also
use the help function or documentation of your Flash player or contact the
manufacturer or user support.
However, if you prevent or restrict the installation of cookies, this may mean
that not all functions of our website can be used to their full extent.</p> 
<h3 style={{ marginLeft : "30px" , marginBottom : "2px" }}>Contact enquiries / contact option</h3>
<p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} >If you contact us via contact form or e-mail, the data you provide will be
used to process your enquiry. The provision of the data is necessary for
processing and answering your enquiry – without the provision of this data,
we cannot answer your enquiry or can only answer it to a limited extent.
The legal basis for this processing is Art. 6 para. 1 lit. b) GDPR.
Your data will be deleted if your enquiry has been conclusively answered
and the deletion does not conflict with any statutory retention obligations,
such as in the case of any subsequent contract processing.</p>
<h3 style={{ marginLeft : "30px" , marginBottom : "2px" }}>YouTube</h3>
<p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }}>We use YouTube on our website. This is a video portal of YouTube LLC,
901 Cherry Ave, 94066 San Bruno, CA, USA, hereinafter referred to as
“YouTube”. YouTube is a subsidiary of Google LLC, 1600 Amphitheatre
Parkway, Mountain View, CA 94043 USA, hereinafter referred to as
“Google”.</p>


<p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }}>Through certification according to the EU-US Privacy Shield (“EU-US
Privacy Shield”)</p>

<a style={{ marginLeft : "70px" , marginRight : "50px" }} href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" >https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a>

<p style={{ marginLeft : "70px" , marginRight : "50px"  , marginTop: "20px"  , marginBottom : "20px" }} >Google, and therefore also its subsidiary YouTube, guarantees that the
data protection requirements of the EU will also be complied with when
processing data in the USA.
We use YouTube in connection with the “extended data protection mode”
function in order to be able to show you videos. The legal basis is Art. 6
para. 1 lit. f) GDPR. Our legitimate interest lies in improving the quality of
our website. According to YouTube, the “Enhanced Privacy Mode” function

means that the data described in more detail below is only transmitted to
the YouTube server when you actually start a video.
Without this “extended data protection mode”, a connection to the YouTube
server in the USA is established as soon as you access one of our web
pages on which a YouTube video is embedded.
This connection is necessary in order to be able to display the respective
video on our website via your Internet browser. In the course of this,
YouTube will at least record and process your IP address, the date and
time as well as the website you have visited. In addition, a connection to
Google’s “DoubleClick” advertising network is established.
If you are logged in to YouTube at the same time, YouTube will assign the
connection information to your YouTube account. If you wish to prevent
this, you must either log out of YouTube before visiting our website or make
the appropriate settings in your YouTube user account.
For the purpose of functionality and to analyse user behaviour, YouTube
permanently stores cookies on your end device via your Internet browser. If
you do not agree to this processing, you have the option of preventing the
storage of cookies by changing the settings in your Internet browser. You
can find more information on this above under “Cookies”.
Google provides further information about the collection and use of data as
well as your rights and protection options in this regard in the information
available at</p> 

<p style={{ marginLeft : "70px" , marginRight : "50px" ,   marginBottom : "20px" }}><a href="https://policies.google.com/privacy" >https://policies.google.com/privacy</a></p>

<p><a style={{ marginLeft : "70px"}} href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" >Sample data protection declaration </a><span>of the law </span><a  href="https://www.ratgeberrecht.eu/" >firm Weiß &amp; Partner</a></p>

        </div>

    );

    }
    else if(  location.state.screenType === "tandc"){
    
      

        return(

            <div style={{ height : "100vh", backgroundColor : "#F7E5E9"}} >
                <h2 style={{ marginLeft : "70px" , marginBottom : "20px"  , marginTop : "4px"}} >Legal Notice</h2>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} >Publisher:</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  }} >Soceo gGmbH</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  }} >Max-Eyth-Strasse 21</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} > 72622 Nürtingen</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} >info@soceo.de</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"   }} >Competent court: HRB 764 698 – Stuttgart Local Court</p>

                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} >Management: Sujoy Chatterjee and Jörn Ziegler</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} >Responsible for the content according to § 18 Abs. 2 MStV: Sarah Gekeler</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "10px" }} >Disclaimer of liability:</p>
                <p style={{ marginLeft : "70px" , marginRight : "50px"  ,  marginBottom : "20px" }} >No responsibility is assumed for the content of linked websites. The editorial responsibility refers to the contents of this page www.learn-up.org. </p>
            </div>

        );


    }

}




export default  PrivacyPolicyAndTC ; 
