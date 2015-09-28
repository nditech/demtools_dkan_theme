# Nuboot Radix theme

This is the default theme for DKAN 1.0 -> https://github.com/NuCivic/dkan

## Contributing

We are accepting issues in the dkan issue thread only -> https://github.com/NuCivic/dkan/issues -> Please label your issue as **"component: nuboot_radix"** after submitting so we can identify problems and feature requests faster.

If you can, please cross reference commits in this repo to the corresponding issue in the dkan issue thread. You can do that easily adding this text:

```
NuCivic/dkan#issue_id
``` 

to any commit message or comment replacing **issue_id** with the corresponding issue id.

## Installation

DKAN is an open source platform for warehousing and sharing open data with a full suite of cataloging, publishing and visualization features. DKAN is developed by NuCivic, and the code and links to developer documentation can be found here, http://www.nucivic.com/dkan/ .

The National Democratic Institute (NDI) has deployed DKAN for use in data publishing, analysis and visualization, and for use in election cases, NDI has also developed a practical and visually appealing theme. Below are instructions for downloading DKAN and installing it with NDI’s theme.

You will need a Linux server, comfort working with Linux/Apache/MySQL/PHP (LAMP) web application stacks, some systems administration experience, and time to play around.

Individual instructions will vary based on your version of Linux. The following instructions were written for Ubuntu Linux.

1.Become the root user.

		sudo su

2.Configure the /etc/httpd/conf/httpd.conf file to point to your will-be data warehouse. The httpd.conf file is the main configuration file for the Apache web server.

		vim /etc/httpd/conf/httpd.conf
	
		Here, change document root to :  /var/www/html/website_name

		Eg: /var/www/html/dkan
	
		Add line at the bottom:
		<Directory "/var/www/html/dkan" >
		AllowOverride All
		</Directory>

3.We need to create a directory named after our website that matches document root previously set in the Apache configuration.

		mkdir /var/www/html/dkan

4.Restart the web server to apply the changes. The restart option is a shorthand way of stopping and then starting the Apache HTTP Server.

		service httpd restart

5.Now, go to current working directory to the file we just created. We will install drupal here.

		cd /var/www/html/dkan/

6.Download the latest version of DKAN from the NuCivic web site using “wget”. Adjust the wget command below to reflect the current version shared here: http://docs.getdkan.com/dkan-documentation/dkan-developers-guide/installing-dkan 

		wget https://github.com/nuams/dkan-drops-7/archive/7.x-1.0.zip

7.Unzip the downloaded file.

		unzip 7.x-1.0.zip

8.To grant permissions. Go to the following directory.

		cd /var/www/html

		chown -Rv apache:apache dkan 

9.Notice that we now have a 7.x-1.0.zip directory to work with. We want the DKAN files to be in our document root, not in a 'dkan-drops-7-7.x-1.0' subdirectory. So, we'll move the contents of the directory up one level.
		
		cd dkan

		mv dkan-drops-7-7.x-1.0/* ./

		mv dkan-drops-7-7.x-1.0/.htaccess ./

10.Remove the now-empty directory

		ls -lah dkan-drops-7-7.x-1.0

		rm -rf dkan-drops-7-7.x-1.0

11.Go to your website. DKAN has hopefully been successfully installed.

		https://(your-website)

12.In your website, Choose the language as English. Click on Save and continue. 

13.In the database configuration option, set up a database with the correct fields. Select the Database Type as MySQL, MariaDB or an equivalent type. Fill in the correct name, username and password. Click on Save and continue. Instructions for installing MySQL are beyond the scope of this document, but you can find some on the MySQL site, http://www.mysql.com .		
	
**To create a new user.

		CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';

**To grant access to the new user.
	
		GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';

**Once you have granted access, make sure to reload all the privileges.

		FLUSH PRIVILEGES; 

**To access your MySQL Database.

		mysql -u {mysql-user} -p {mysql-password}

**To show the existing databases.

		SHOW DATABASES;

**To create a new database.
		
		CREATE DATABASE {name};

**To use the new database.
		
		USE {new database name}


14.Configure the site with the correct site information and the correct site maintenance account. Click on Save and continue

15.DKAN has been successfully installed. 

16.Download the NDI DKAN theme .zip file from https://github.com/nditech/ndi_dkan_theme to your local computer.

17.Go to the successfully installed DKAN website.

18.From the toolbar:

		Appearance ==>Install new theme.

19.Choose the .zip file saved on your computer. Click on the Install button.

20.Click on "enable newly added themes" and enable the NDI DKAN theme. Click on the set default button for the theme. 

21.NDI DKAN has been successfully installed.

22.For information on using your new system, NDI has developed a user and administrative guide, both of which are available on our DemTools website.

