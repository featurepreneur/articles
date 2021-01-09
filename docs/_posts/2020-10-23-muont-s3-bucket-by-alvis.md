---
title: How to Mount S3 bucket on EC2 Linux Instance
date: 2020-10-23
tags: 
  - Linux
  - articles
  - S3bucket
author: Alvis F
featuredimg: 'https://miro.medium.com/max/1000/1*avE9qoDfOG4N9yVMMt072g.png'
summary: Get a idea to mount S3 bucket EC2
---

This is an extension of using Jupyter notebook on AWS.


So after you are done with that, we can now move on to mount S3 as the file system for the EC2 instance.
An S3 bucket can be mounted in an AWS instance as a file system known as S3fs. S3fs is a FUSE file-system that allows you to mount an Amazon S3 bucket as a local file-system. It behaves like a network-attached drive, as it does not store anything on the Amazon EC2, but the user can access the data on S3 from EC2 instance.
Filesystem in Userspace (FUSE) is a simple interface for userspace programs to export a virtual file-system to the Linux kernel. It also aims to provide a secure method for non-privileged users to create and mount their own file-system implementations.

S3fs-fuse project is written in python backed by Amazons Simple Storage Service. Amazon offers an open API to build applications on top of this service, which several companies have done, using a variety of interfaces (web, sync, fuse, etc.).

Follow the below steps to mount your S3 bucket to Your Linux Instance.
This Tutorial assumes that you have a running Linux EC2 instance on AWS with root access and a bucket created in S3 which is to be mounted on your Linux Instance. You will also require Access and Secret key pair with sufficient permissions of S3 or else an IAM access to generate or Create it.
We will perform the steps as a root user. You can also use sudo command if you are a regular user with sudo access. So let us get started.

Set up everything properly

```
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_COLLATE=C
export LC_CTYPE=en_US.UTF-8
```
run this to make sure.
**Step-1**
For CentOS or Red Hat

```
yum update all
```
**For Ubuntu**
```
apt-get update
```
**Step-2:-** Install the dependencies.

In CentOS or Red Hat

```
sudo yum install automake fuse fuse-devel gcc-c++ git libcurl-devel libxml2-devel make openssl-devel
```
In Ubuntu or Debian

```
sudo apt-get install automake autotools-dev fuse g++ git libcurl4-gnutls-dev libfuse-dev libssl-dev libxml2-dev make pkg-config
```
**Step-3:-** Clone s3fs source code from git.

```
git clone https://github.com/s3fs-fuse/s3fs-fuse.git
```

**Step-4:-** Now change to source code directory, and compile and install the code with the following commands:

```
cd s3fs-fuse
./autogen.sh
./configure -prefix=/usr -with-openssl
make
sudo make install
```

**Step-5:-** Use the below command to check where the s3fs command is placed in O.S. It will also tell you the installation is ok.

```
which s3fs
```
**Step-6:-** Getting the access key and secret key.
You will need AWS Access key and Secret key with appropriate permissions to access your s3 bucket from your EC2 instance. You can easily manage your user permissions from IAM (Identity and Access Management) Service provided by AWS. Create an IAM user with S3 full access(or with a role with sufficient permissions) or use root credentials of your Account. Here we will use the root credentials for simplicity.
Go to AWS Menu -> Your AWS Account Name -> My Security Credentials. Here your IAM console will appear. You have to go to Users > Your Account name and under the Permissions Tab, check whether you have sufficient access to S3 bucket. If not, you can manually assign an existing “S3 Full-Access” policy or create a new policy with sufficient permissions.

Now go to Security Credentials Tab and Create Access Key. A new Access Key and Secret Key pair will be generated. Here you can see the access key and secret key (the secret key is visible when you click on the show tab) which you can also download. Copy these both keys separately.

Note that you can always use existing access and secret key pair. Alternatively, you can also create a new IAM user and assign it sufficient permissions to generate the access and secret key.

**Step-7:-** Create a new file in /etc. With the name passwd-s3fs and Paste the access key and secret key in the below format.
```
sudo touch /etc/passwd-s3fs
sudo vim /etc/passwd-s3fs
```

```
Your_accesskey:Your_secretkey
```
this would be the content of the file

**Step-8:-** change the permission of the file.
```
sudo chmod 640 /etc/passwd-s3fs
```
**Step-9:-** Now create a directory or provide the path of an existing directory and mount S3bucket in it.
If you have a simple bucket without dot(.) in the bucket name, use the commands used in point “a” or else for a bucket with a dot(.) in bucket name, follow step “b”:
**a) Bucket name without dot(.):**
```
mkdir /mys3bucket
s3fs your_bucketname -o use_cache=/tmp -o allow_other -o uid=1000 -o mp_umask=002 -o multireq_max=5 /mys3bucket
```
where, “your_bucketname” = the name of your S3 bucket that you have created on AWS S3, use_cache = to use a directory for its cache purpose, allow_other= to allow other users to write to the mount-point, uid= uid of the user/owner of the mount point (can also add “-o gid=1001” for the group), mp_umask= to remove other users permission. multireq_max= parameter to send a request to s3 bucket, /mys3bucket= mountpoint where the bucket will be mounted.

You can make an entry in /etc/rc.local to automatically remount after reboot. Find the s3fs binary file by “which” command and make the entry before the “exit 0” line as below.

```
which s3fs
--(output)--> /usr/local/bin/s3fs
nano /etc/rc.local
--(output)--> /usr/local/bin/s3fs your_bucketname -o use_cache=/tmp -o allow_other -o uid=1001 -o mp_umask=002 -o multireq_max=5 /mys3bucket
```
**b) Bucket name with a dot(.):**
```
mkdir /mys3bucket
s3fs your_bucketname /mys3bucket -o use_cache=/tmp -o allow_other -o uid=1001 -o mp_umask=002 -o multireq_max=5 -o use_path_request_style -o url=https://s3-{{aws_region}}.amazonaws.com
```
where, “your_bucketname” = the name of your S3 bucket that you have created on AWS S3, use_cache = to use a directory for its cache purpose, allow_other= to allow other users to write to the mount-point, uid= uid of the user/owner of the mountpoint (can also add “-o gid=1001” for the group), mp_umask= to remove other users permission. multireq_max= parameter to send a request to s3 bucket, /mys3bucket= mountpoint where the bucket will be mounted.

Remember to replace “{{aws_region}}” with your bucket region (example: EU-west-1).

You can make an entry in /etc/rc.local to automatically remount after reboot. Find the s3fs binary file by “which” command and make the entry before the “exit 0” line as below.

```
which s3fs /usr/local/bin/s3fs
nano /etc/rc.local
s3fs your_bucketname /mys3bucket -o use_cache=/tmp -o allow_other -o uid=1001 -o mp_umask=002 -o multireq_max=5 -o use_path_request_style -o url=https://s3-{{aws_region}}.amazonaws.com
```
To debug at any point, add “-o dbglevel=info -f -o curldbg” in the s3fs mount command.

**Step-10:-** Check mounted s3 bucket. The output will be similar as shown below, but Used size may differ.

```
df -Th
```
“or”

```
df -Th /mys3bucket
```
Filesystem Type Size Used Avail Use% Mounted on
s3fs fuse.s3fs 256T 0 256T 0% /mys3bucket
If it shows the mounted file system, you have successfully mounted the S3 bucket on your EC2 Instance. You can also test it further by creating a test file.

```
cd /mys3bucket
echo “this is a test file to check s3fs” >> test.txt
ls
```
This change should also reflect on the S3 bucket. So log in to your S3 bucket to verify if the test file is present or not.
**Note:**If you already had some data in s3bucket and it is not visible, then you have to set permission in ACL at the S3 AWS management console for that s3 bucket.
Also, If you get any s3fs error such as “transport endpoint is not connected”, you have to unmount and remount the file-system. You can also do so through a custom script to detect and perform remount automatically.

Congrats!! You have successfully mounted your S3 bucket to your EC2 instance. Any files are written to /mys3bucket will be replicated to your Amazon S3 bucket.

Now we need to access it from Jupyter notebook. such that we have to make sure we are running the jupyter notebook as admin

navigate to

```
/home/USERNAME/.jupyter/jupyter_notebook_config.py
```
and change

```
#c.Application.allow_admin = False
```
to

```
c.Application.allow_admin = True
```

**Conclusion**
Let me know in the comments if this helped, any corrections, etc. Feel free to reach me out

[Featurepreneur on LinkedIn](https://www.linkedin.com/in/alvisf/)