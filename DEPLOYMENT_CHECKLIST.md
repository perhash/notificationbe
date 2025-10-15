# Vercel Deployment Checklist

## ✅ **Configuration Issues Fixed**

### **Backend Issues Fixed:**
1. ✅ **Server.js**: Fixed `server.listen()` for Vercel compatibility
2. ✅ **Vercel.json**: Added proper Vercel configuration
3. ✅ **CORS**: Updated with correct URLs (`notificationfe.vercel.app`)
4. ✅ **Environment Variables**: Documented all required variables

### **Frontend Issues Fixed:**
1. ✅ **API URLs**: Updated to use `notificationbe.vercel.app`
2. ✅ **WebSocket**: Updated to use correct backend URL
3. ✅ **PWA Config**: Fixed Vite PWA configuration
4. ✅ **Vercel.json**: Added proper frontend configuration

## 🔧 **Required Environment Variables**

### **Backend (notificationbe.vercel.app):**
```
FRONTEND_URL=https://notificationfe.vercel.app
VERCEL_FRONTEND_URL=https://notificationfe.vercel.app
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
```

### **Frontend (notificationfe.vercel.app):**
```
VITE_API_BASE_URL=https://notificationbe.vercel.app/api
VITE_API_URL=https://notificationbe.vercel.app
```

## 📋 **Deployment Steps**

### **1. Backend Deployment:**
1. ✅ Push changes to GitHub
2. ✅ Set environment variables in Vercel
3. ✅ Deploy backend to Vercel
4. ✅ Test backend at: https://notificationbe.vercel.app/

### **2. Frontend Deployment:**
1. ✅ Push changes to GitHub
2. ✅ Set environment variables in Vercel
3. ✅ Deploy frontend to Vercel
4. ✅ Test frontend at: https://notificationfe.vercel.app/

## 🧪 **Testing Checklist**

### **Backend Tests:**
- [ ] Health check: `GET https://notificationbe.vercel.app/api/health`
- [ ] CORS test: `GET https://notificationbe.vercel.app/api/cors-test`
- [ ] API endpoints working
- [ ] Database connection working

### **Frontend Tests:**
- [ ] App loads without errors
- [ ] API calls working
- [ ] WebSocket connection working
- [ ] PWA features working
- [ ] Push notifications working

### **Integration Tests:**
- [ ] Login functionality
- [ ] Real-time notifications
- [ ] Order creation
- [ ] Rider assignment
- [ ] PWA installation

## 🚨 **Common Issues & Solutions**

### **Issue 1: CORS Errors**
**Solution**: Check environment variables are set correctly
```bash
# Test CORS
curl -H "Origin: https://notificationfe.vercel.app" \
     https://notificationbe.vercel.app/api/cors-test
```

### **Issue 2: WebSocket Not Connecting**
**Solution**: Check WebSocket URL configuration
```javascript
// Should connect to: https://notificationbe.vercel.app
```

### **Issue 3: Database Connection Failed**
**Solution**: Check DATABASE_URL environment variable
```bash
# Test database connection
curl https://notificationbe.vercel.app/api/health
```

### **Issue 4: PWA Not Installing**
**Solution**: Check service worker and manifest
```bash
# Check manifest
curl https://notificationfe.vercel.app/manifest.json
```

## 📱 **PWA Features on Vercel**

### **Working Features:**
- ✅ App installation
- ✅ Offline functionality
- ✅ Push notifications
- ✅ Real-time updates
- ✅ Native-like behavior

### **Requirements:**
- ✅ HTTPS (Vercel provides)
- ✅ Service worker
- ✅ Web app manifest
- ✅ Proper CORS configuration

## 🔍 **Debug Commands**

### **Check Backend Status:**
```bash
curl https://notificationbe.vercel.app/api/health
```

### **Check CORS:**
```bash
curl -H "Origin: https://notificationfe.vercel.app" \
     https://notificationbe.vercel.app/api/cors-test
```

### **Check Frontend:**
```bash
curl https://notificationfe.vercel.app/
```

## ✅ **Final Verification**

1. **Backend**: https://notificationbe.vercel.app/ ✅
2. **Frontend**: https://notificationfe.vercel.app/ ✅
3. **CORS**: Working between domains ✅
4. **WebSocket**: Real-time features working ✅
5. **PWA**: Installable and functional ✅

## 🎯 **Next Steps After Deployment**

1. Test all functionality
2. Verify PWA installation
3. Test push notifications
4. Monitor for any errors
5. Update documentation if needed
