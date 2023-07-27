import { sendMail } from '../middlewares/sendMail.js';
import { User } from '../model/User.js';
import jwt from 'jsonwebtoken';
import cloudinary from 'cloudinary';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Email or password',
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie('token', token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: 'Logged In successfully',
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: 'Logged Out successfully',
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne().select('-password -email'); //This will exclude password and email

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const userMessage = `Hey,I am ${name} My email is ${email} .My message is ${message}`;
    await sendMail(userMessage);
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, email, password, skills, about } = req.body;
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (skills) {
      await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);

      if (skills.image1) {
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: 'portfolio',
        });
      }

      user.skills.image1 = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }
    if (skills.image2) {
      const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
        folder: 'portfolio',
      });
    }

    user.skills.image2 = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };

    if (skills.image3) {
      const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
        folder: 'portfolio',
      });
    }

    user.skills.image3 = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };

    if (skills.image4) {
      const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
        folder: 'portfolio',
      });
    }

    user.skills.image4 = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };

    if (skills.image5) {
      const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
        folder: 'portfolio',
      });
    }

    user.skills.image5 = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };

    if (skills.image6) {
      const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
        folder: 'portfolio',
      });
    }

    user.skills.image6 = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };

    if (about) {
      user.about.name = about.name;

      user.about.title = about.title;
      user.about.subtitle = about.subtitle;
      user.about.description = about.description;
      user.about.quote = user.quote;

      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: 'portfolio',
        });
      }

      user.about.avatar = {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: 'User updated Successfully successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const addTimeline = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const user = await User.findById(req.user._id);

    user.timeline.unshift({
      title,
      description,
      date,
    });

    await user.save();
    return res.status(200).json({
      success: true,
      message: 'Added Timeline  successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

export const addProject = async (req, res) => {
  try {
    const { url, title, image, description, techStack } = req.body;
    const user = await User.findById(req.user._id);

    user.projects.unshift({
      url,
      title,
      description,
      techStack,
    });
    if (user.projects.image) {
      await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
      const myCloud = await cloudinary.v2.uploader.upload(about.image, {
        folder: 'portfolio',
      });
    }
    await user.save();
    return res.status(200).json({
      success: true,
      message: 'projects added successfully',
    });
  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};



